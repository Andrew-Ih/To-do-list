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

// Close and reset dialog when the cancel button is clicked
const cancelTaskButton = document.querySelector('.cancel-task');
cancelTaskButton.addEventListener('click', () => {
    const addTaskForm = document.querySelector('.add-task-form'); // Select the "Add Task" form
    addTaskForm.reset(); // Reset the form
    addTaskDialog.close(); // Close the "Add Task" dialog
    overlay.style.display = 'none'; // Hide the overlay
});

const cancelProjectButton = document.querySelector('.cancel-project');
cancelProjectButton.addEventListener('click', () => {
    const addProjectForm = document.querySelector('.add-project-form'); // Select the "Create New Project" form
    addProjectForm.reset(); // Reset the form
    addProjectDialog.close(); // Close the "Create New Project" dialog
    overlay.style.display = 'none'; // Hide the overlay
});








