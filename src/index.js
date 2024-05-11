import './styles/style.css';
import createSidebar from './sidebar';
import { addTasks, allTasksContainer} from './allTasks';
import { addOverdues, overdueContainer } from './overdue';
import { addTodays, todayContainer } from './today';

const allTaskBtn = document.querySelector('.all-tasks-btn');
const todayBtn = document.querySelector('.today-btn');
const overdueBtn = document.querySelector('.overdue-btn');
const addBtn = document.querySelector('.add-task-btn');


createSidebar();
allTasksContainer();

addBtn.addEventListener('click', function() {
    addTasks();
   
});

allTaskBtn.addEventListener('click', function() {
    allTasksContainer();
});

todayBtn.addEventListener('click', function() {
    todayContainer();
    
});

overdueBtn.addEventListener('click', function() {
    overdueContainer();
    
});



function clearScreen() {
    const content = document.querySelector('#content'); // Assuming the content is within a main element
    content.innerHTML = ''; // Remove all content within the main element
}
