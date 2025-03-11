let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const todoTasks = document.getElementById('todo-tasks');
const inProgressTasks = document.getElementById('in-progress-tasks');
const doneTasks = document.getElementById('done-tasks');
const addTaskButton = document.getElementById('add-task');
const taskModal = document.getElementById('task-modal');
const closeModal = document.querySelector('.close');
const saveTaskButton = document.getElementById('save-task');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskPriority = document.getElementById('task-priority');
const taskDueDate = document.getElementById('task-due-date');
const voiceInputButton = document.getElementById('voice-input');
const darkModeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const clearTasksButton = document.getElementById('clear-tasks');
const sortByPriorityButton = document.getElementById('sort-by-priority');
const sortByDateButton = document.getElementById('sort-by-date');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';

voiceInputButton.addEventListener('click', () => {
  recognition.start();
  voiceInputButton.textContent = 'Listening...';
});

recognition.onresult = (event) => {
  taskTitle.value = event.results[0][0].transcript;
  voiceInputButton.textContent = '🎤 Voice Input';
};

recognition.onerror = () => {
  voiceInputButton.textContent = '🎤 Voice Input';
};

addTaskButton.addEventListener('click', () => taskModal.style.display = 'flex');
closeModal.addEventListener('click', () => taskModal.style.display = 'none');

saveTaskButton.addEventListener('click', () => {
  const title = taskTitle.value.trim();
  const description = taskDescription.value.trim();
  const priority = taskPriority.value;
  const dueDate = taskDueDate.value;
  if (title) {
    tasks.push({ id: Date.now(), title, description, priority, dueDate, status: 'todo' });
    saveTasks();
    renderTasks();
    taskModal.style.display = 'none';
    taskTitle.value = '';
    taskDescription.value = '';
    taskPriority.value = 'low';
    taskDueDate.value = '';
  }
});

menuToggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

clearTasksButton.addEventListener('click', () => {
  tasks = [];
  saveTasks();
  renderTasks();
});

sortByPriorityButton.addEventListener('click', () => {
  tasks.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
  renderTasks();
});

sortByDateButton.addEventListener('click', () => {
  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  renderTasks();
});

function renderTasks() {
  const columns = { todo: todoTasks, 'in-progress': inProgressTasks, done: doneTasks };
  Object.values(columns).forEach(column => column.innerHTML = '');
  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <p><strong>Due Date:</strong> ${task.dueDate || 'No due date'}</p>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskElement.addEventListener('dragstart', () => taskElement.classList.add('dragging'));
    taskElement.addEventListener('dragend', () => {
      taskElement.classList.remove('dragging');
      updateTaskStatus(task.id, taskElement.parentElement.id);
      saveTasks();
    });
    columns[task.status].appendChild(taskElement);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function updateTaskStatus(id, newStatus) {
  const task = tasks.find(task => task.id === id);
  if (task) task.status = newStatus;
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.querySelectorAll('.tasks').forEach(column => {
  column.addEventListener('dragover', e => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    column.appendChild(dragging);
  });
});

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

renderTasks();