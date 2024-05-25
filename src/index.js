import './styles/style.css';
import {createSidebar, addNewProject } from './sidebar';
import {allTasksContainer, cancelProjectButton, cancelTaskButton, displayTasks, incrementAllTasksNum, overdueTasksContainer, saveTaskButton, todaysTasksContainer} from './tasks';
import folder from './img/folder.svg';

const addTaskDialog = document.querySelector('.add-task-dialog');
const addTaskButton = document.querySelector('.add-task-btn');
const addProjectDialog = document.querySelector('.add-new-project');
const addProjectButton = document.querySelector('.new-project');
const overlay = document.querySelector('.overlay');


createSidebar();
allTasksContainer();
// todaysTasksContainer();
// overdueTasksContainer();


// Add event listeners to buttons
document.querySelector('.all-tasks-btn').addEventListener('click', () => {
    allTasksContainer();
});

document.querySelector('.today-btn').addEventListener('click', () => {
    todaysTasksContainer();
});

document.querySelector('.overdue-btn').addEventListener('click', () => {
    overdueTasksContainer();
});


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
















