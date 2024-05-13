import './styles/style.css';
import createSidebar from './sidebar';
import { addTasks, allTasksContainer} from './tasks';


const allTaskBtn = document.querySelector('.all-tasks-btn');
const todayBtn = document.querySelector('.today-btn');
const overdueBtn = document.querySelector('.overdue-btn');
const addBtn = document.querySelector('.add-task-btn');


createSidebar();
allTasksContainer();

// addBtn.addEventListener('click', function() {
//     addTasks();
// });

// allTaskBtn.addEventListener('click', function() {
//     allTasksContainer();
// });

const addTaskDialog = document.querySelector('.add-task-dialog');
const addTaskButton = document.querySelector('.add-task-btn');
const addProjectDialog = document.querySelector('.add-new-project');
const addProjectButton = document.querySelector('.new-project');
const overlay = document.querySelector('.overlay');

addTaskButton.addEventListener('click', () => {
    addTaskDialog.showModal(); // Open the dialog
    overlay.style.display = 'block'; // Display the overlay
});

addProjectButton.addEventListener('click', () => {
    addProjectDialog.showModal(); // Open the dialog
    overlay.style.display = 'block'; // Display the overlay
});

// Close the dialog when the cancel button is clicked
const cancelButton = document.querySelector('.cancel-task');
cancelButton.addEventListener('click', () => {
    addTaskDialog.close(); // Close the dialog
    addProjectDialog.close();
    overlay.style.display = 'none'; // Hide the overlay
});

const cancelProject = document.querySelector('.cancel-project');
cancelProject.addEventListener('click', () => {
    addProjectDialog.close();
    overlay.style.display = 'none'; // Hide the overlay
});








