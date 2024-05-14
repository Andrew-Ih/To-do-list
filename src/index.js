import './styles/style.css';
import {createSidebar, addNewProject } from './sidebar';
import {allTasksContainer, cancelProjectButton, cancelTaskButton, displayTasks, saveTaskButton} from './tasks';
import folder from './img/folder.svg';


const allTaskBtn = document.querySelector('.all-tasks-btn');
const todayBtn = document.querySelector('.today-btn');
const overdueBtn = document.querySelector('.overdue-btn');
const addBtn = document.querySelector('.add-task-btn');
const addTaskDialog = document.querySelector('.add-task-dialog');
const addTaskButton = document.querySelector('.add-task-btn');
const addProjectDialog = document.querySelector('.add-new-project');
const addProjectButton = document.querySelector('.new-project');
const overlay = document.querySelector('.overlay');

let tasks = [];


createSidebar();
allTasksContainer();

const saveProjectButton = document.querySelector('.save-project');
addNewProject(saveProjectButton);

addTaskButton.addEventListener('click', () => {
    addTaskDialog.showModal(); // Open the dialog
    overlay.style.display = 'block'; // Display the overlay
});

addProjectButton.addEventListener('click', () => {
    addProjectDialog.showModal(); // Open the dialog
    overlay.style.display = 'block'; // Display the overlay
});

cancelTaskButton();
cancelProjectButton();
saveTaskButton();
displayTasks();
















