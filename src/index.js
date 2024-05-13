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
const overlay = document.querySelector('.overlay');

addTaskButton.addEventListener('click', () => {
    addTaskDialog.showModal(); // Open the dialog
    overlay.style.display = 'block'; // Display the overlay
});

// Close the dialog when the cancel button is clicked
const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', () => {
    addTaskDialog.close(); // Close the dialog
    overlay.style.display = 'none'; // Hide the overlay
});


// function renderAddTaskForm() {

// }

// function renderNewProjectForm() {
    
// }

