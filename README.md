#Simple Task Manager

The Simple Task Manager is a web-based application designed to help users organize and manage their tasks efficiently.
It allows users to create, read, update, and delete tasks,
and provides a visual interface to track tasks across three stages: To Do, In Progress, and Done.
Built with HTML, CSS, and JavaScript,
it includes features like drag-and-drop functionality, voice input, dark mode, task prioritization, and due dates. 
Tasks are saved in localStorage, ensuring they persist even after the page is refreshed or closed.
The app is responsive, works seamlessly on both desktop and mobile devices, and offers a clean, user-friendly interface.

Key Features
1.CRUD Operations: Create, read, update, and delete tasks.

2.Drag-and-Drop: Move tasks between columns (To Do, In Progress, Done).

3.Voice Input: Add tasks by speaking into the microphone.

4.Dark Mode: Toggle between light and dark themes.

5.Task Prioritization: Assign priority levels (Low, Medium, High) and sort tasks.

6.Due Dates: Set and sort tasks by due dates.

7.Local Storage: Save tasks in the browser for persistence.

8.Responsive Design: Optimized for all screen sizes.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Task Manager Task Manager</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
  <header>
    <h1> Task Manager</h1>
    <nav>
      <button id="theme-toggle"><i class="fas fa-moon"></i></button>
      <button id="menu-toggle"><i class="fas fa-bars"></i></button>
      <div id="menu" class="menu">
        <button id="clear-tasks"><i class="fas fa-trash"></i> Clear All Tasks</button>
        <button id="sort-by-priority"><i class="fas fa-sort-amount-up"></i> Sort by Priority</button>
        <button id="sort-by-date"><i class="fas fa-calendar-alt"></i> Sort by Due Date</button>
      </div>
    </nav>
  </header>

  <div class="task-manager">
    <div class="column" id="todo">
      <h2><i class="fas fa-list"></i> To Do</h2>
      <div class="tasks" id="todo-tasks"></div>
      <button id="add-task"><i class="fas fa-plus"></i> Add Task</button>
    </div>
    <div class="column" id="in-progress">
      <h2><i class="fas fa-spinner"></i> In Progress</h2>
      <div class="tasks" id="in-progress-tasks"></div>
    </div>
    <div class="column" id="done">
      <h2><i class="fas fa-check-circle"></i> Done</h2>
      <div class="tasks" id="done-tasks"></div>
    </div>
  </div>

  <!-- Add Task Modal -->
  <div id="task-modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2><i class="fas fa-tasks"></i> Add Task</h2>
      <input type="text" id="task-title" placeholder="Task Title">
      <textarea id="task-description" placeholder="Task Description"></textarea>
      <div class="form-group">
        <label for="task-priority"><i class="fas fa-exclamation-circle"></i> Priority:</label>
        <select id="task-priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div class="form-group">
        <label for="task-due-date"><i class="fas fa-calendar"></i> Due Date:</label>
        <input type="date" id="task-due-date">
      </div>
      <div class="form-group">
        <button id="save-task"><i class="fas fa-save"></i> Save Task</button>
        <button id="voice-input"><i class="fas fa-microphone"></i> Voice Input</button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>