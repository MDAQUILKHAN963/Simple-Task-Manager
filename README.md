Simple Task Manager
A lightweight and responsive task management application built with Vanilla JavaScript, HTML5, and CSS3.
This project allows users to create, read, update, and delete tasks, as well as move tasks between columns (To Do, In Progress, Done) using drag-and-drop functionality
Tasks are persisted in the browser's localStorage, ensuring data is saved even after refreshing the page.

Features
CRUD Operations:
Create: Add new tasks.
Read: Display tasks in their respective columns.
Update: Edit task status by dragging and dropping.
Delete: Remove tasks (optional enhancement).

Drag-and-Drop Functionality:
Move tasks between To Do, In Progress, and Done columns seamlessly.

Responsive Design:
Works flawlessly on both mobile and desktop devices.

Local Storage:
Tasks are saved in the browser's localStorage, ensuring data persistence.

Clean UI/UX:
Smooth animations and transitions for a polished user experience.

Setup and Installation
Follow these steps to set up the project locally:

 open the index.html file in your browser.

Technologies Used
Frontend:
HTML5
CSS3 (Flexbox and Grid for layout)
Vanilla JavaScript

Persistence:
localStorage for saving tasks.

How to Use
Add a Task:
Type a task in the input field and click Add Task.
Move Tasks:
Drag and drop tasks between the To Do, In Progress, and Done columns.

Persistent Data:
Tasks are automatically saved in localStorage. Refresh the page to see your tasks still there.

Code Structure

index.html:
Contains the HTML structure for the task manager

styles.css:
Handles the styling and layout of the application.

script.js:
Implements the core functionality (CRUD operations, drag-and-drop, and localStorage integration).

Optional Enhancements
Dark Mode:
Add a toggle button to switch between light and dark themes.

Priority Tags:
Add color-coded priority tags (e.g., High, Medium, Low) to tasks.

API Integration:
Fetch weather data for task due dates using a public API.

Voice Input:
Allow users to add tasks using voice input.