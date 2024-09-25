import './styles/style.css';

const addTaskDialog = document.querySelector('.add-task-dialog');
const addProjectDialog = document.querySelector('.add-new-project');
const overlay = document.querySelector('.overlay');

const numberOfAllTasks = document.querySelector('.all-tasks-num');
const numberOfTodayTasks = document.querySelector('.today-num');
const numberOfOverdueTasks = document.querySelector('.overdue-num');

// const main = document.querySelector('.content');
const main = document.querySelector('.task-container');

const allTaskContainer = document.createElement('div');
const todaysContainer = document.createElement('div');
const overdueContainer = document.createElement('div');

let tasks = [];
let todayTasks = [];
let overdueTasks = [];


const newTask1 = { title: 'Walk the dog', notes: 'go to kings park', dueDate: '2024-05-15', priority: 'High', project: 'Project A' };
const newTask2 = { title: 'Get groceries', notes: 'get veggies', dueDate: '2024-05-20', priority: 'Medium', project: 'Project B' };

tasks.push(newTask1);
tasks.push(newTask2);


function initializeTaskArrays() {
    const today = new Date().toISOString().split('T')[0];
    todayTasks = tasks.filter(task => task.dueDate === today);
    overdueTasks = tasks.filter(task => task.dueDate < today);
    initializeOverdueTasksCount();
    updateTaskCounts();
}

function updateTaskCounts() {
    numberOfAllTasks.textContent = tasks.length;
    numberOfTodayTasks.textContent = todayTasks.length;
    numberOfOverdueTasks.textContent = overdueTasks.length;
}

// Call initialize function after setting up tasks
initializeTaskArrays();


//******************************************************************************* */
//Creating the display container for AllTasks, Today and Overdue
//******************************************************************************* */
export function allTasksContainer() {
    allTaskContainer.classList.add('all-task-container');

    const allTaskHeader = document.querySelector('.content-container h2');
    numberOfAllTasks.textContent = tasks.length;
    let AllTasksNum = tasks.length;
    allTaskHeader.innerHTML = "All Tasks (" + AllTasksNum + ")";

    main.innerHTML = '';
    main.appendChild(allTaskContainer);
    displayTasks(tasks, allTaskContainer);
}

export function todaysTasksContainer() {
    todaysContainer.classList.add('today-task-container');

    const todayHeader = document.querySelector('.content-container h2');
    const today = new Date().toISOString().split('T')[0];
    todayTasks = tasks.filter(task => task.dueDate === today);
    let todayNum = todayTasks.length;
    todayHeader.innerHTML = "Today (" + todayNum + ")";

    main.innerHTML = '';
    main.appendChild(todaysContainer);
    displayTasks(todayTasks, todaysContainer);
}

export function overdueTasksContainer() {
    overdueContainer.classList.add('overdue-task-container');

    const overdueHeader = document.querySelector('.content-container h2');
    const today = new Date().toISOString().split('T')[0];
    const overdueTasks = tasks.filter(task => task.dueDate < today);
    let overdueNum = overdueTasks.length;
    // numberOfOverdueTasks = overdueTasks.length;
    overdueHeader.innerHTML = "Overdue (" + overdueNum + ")";

    main.innerHTML = '';
    main.appendChild(overdueContainer);
    displayTasks(overdueTasks, overdueContainer);
}
//******************************************************************************* */

export function cancelTaskButton() {
    const cancelTaskButton = document.querySelector('.cancel-task');

    cancelTaskButton.addEventListener('click', () => {
        const addTaskForm = document.querySelector('.add-task-form'); // Select the "Add Task" form
        addTaskForm.reset(); // Reset the form
        addTaskDialog.close(); // Close the "Add Task" dialog
        overlay.style.display = 'none'; // Hide the overlay
    });
}

export function cancelProjectButton() {
    const cancelProjectButton = document.querySelector('.cancel-project');

    cancelProjectButton.addEventListener('click', () => {
        const addProjectForm = document.querySelector('.add-project-form'); // Select the "Create New Project" form
        addProjectForm.reset(); // Reset the form
        addProjectDialog.close(); // Close the "Create New Project" dialog
        overlay.style.display = 'none'; // Hide the overlay
    });
}

export function saveTaskButton() {
    const saveTaskButton = document.querySelector('.save-task');
    saveTaskButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the values from the form inputs
        const title = document.getElementById('task_title').value;
        const notes = document.getElementById('notes').value;
        const dueDate = document.getElementById('due_date').value;
        const priority = document.getElementById('priority').value;
        const project = document.getElementById('project').value;

        const newTask = {
            title: title,
            notes: notes,
            dueDate: dueDate,
            priority: priority,
            project: project
        };

        tasks.push(newTask);

        displayTasks(tasks, allTaskContainer);
        incrementAllTasksNum();

        // Check if the due date is today
        const today = new Date().toISOString().split('T')[0];
        if (newTask.dueDate === today) {
            todayTasks = tasks.filter(task => task.dueDate === today);
            displayTasks(todayTasks, todaysContainer);
            incrementTodayNum();
        }

        // Check if the due date is before today (overdue)
        if (newTask.dueDate < today) {
            const overdueTasks = tasks.filter(task => task.dueDate < today);
            displayTasks(overdueTasks, overdueContainer); // Display overdue tasks
            incrementOverdueNum();
        }

        closeTaskForm()
    });
}

export function closeTaskForm() {
    const addTaskDialog = document.querySelector('.add-task-dialog');
    addTaskDialog.close();

    const addTaskForm = document.querySelector('.add-task-form');
    addTaskForm.reset();

    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}

export function displayTasks(taskArray, tasksContainer) {
    tasksContainer.innerHTML = ''; 
    // Iterate over each task in the tasks array
    taskArray.forEach((task, index) => {
        // Create HTML elements for the task
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // Create a container for checkbox and task details
        const taskContentContainer = document.createElement('div');
        taskContentContainer.classList.add('task-content-container'); // Flex container for checkbox and details

        const checkBoxContainer = document.createElement('div');
        checkBoxContainer.classList.add('check-box-container');

        // Create checkbox
        const checkBox = document.createElement('div');
        checkBox.classList.add('round');

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox'); 
        input.setAttribute('name', 'check-box');
        input.setAttribute('id', task.title); 

        const label = document.createElement('label');
        label.setAttribute('for', task.title);

        checkBox.appendChild(input);
        checkBox.appendChild(label);

        checkBoxContainer.appendChild(checkBox);

        const taskDetailsContainer = document.createElement('div');
        taskDetailsContainer.classList.add('task-details');

        taskDetailsContainer.innerHTML = `
            <div class="task-heading">${task.title}</div>
            <div class="task-notes">${task.notes}</div>    
        `;

        const dateAndProject = document.createElement('div');
        dateAndProject.classList.add('date-project');

        dateAndProject.innerHTML = `
            <div class="task-duedate">${task.dueDate}</div>
            <div class="task_project">${task.project}</div>  
        `;

        taskDetailsContainer.appendChild(dateAndProject);

        // Append the checkbox and task details to the task content container
        taskContentContainer.appendChild(checkBoxContainer);
        taskContentContainer.appendChild(taskDetailsContainer);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.textContent = 'X';

        // Add click event listener to delete the task
        deleteButton.addEventListener('click', () => {
            // Remove the task from the tasks array
            tasks.splice(index, 1);
            todayTasks.splice(index, 1);
            overdueTasks.splice(index, 1);

            // Update the task count
            updateTaskCounts();

            // Re-display tasks
            reDisplayTasks();
            
        });

        // Append the content container and delete button to the task element
        taskElement.appendChild(taskContentContainer);  // Now both checkbox and task details are grouped
        taskElement.appendChild(deleteButton);          // Delete button goes on the far right

        // Append the task element to the tasks container
        tasksContainer.appendChild(taskElement);
    });
}

export function reDisplayTasks() {
    todaysTasksContainer();
    overdueTasksContainer();
    allTasksContainer();
}

//******************************************************************************* */
//Increment the number of tasks for all tasks, today and overdue 
//******************************************************************************* */
export function incrementAllTasksNum() {
    if (numberOfAllTasks) {
        let currentAllTaskNumber = parseInt(numberOfAllTasks.textContent, 10);
        currentAllTaskNumber++;
        numberOfAllTasks.textContent = currentAllTaskNumber;
    }
}

export function incrementTodayNum() {
    if (numberOfTodayTasks) {
        let currentTodayNumber = parseInt(numberOfTodayTasks.textContent, 10);
        currentTodayNumber++;
        numberOfTodayTasks.textContent = currentTodayNumber;
    }
}

export function incrementOverdueNum() {
    if (numberOfOverdueTasks) {
        let currentOverdueNumber = parseInt(numberOfOverdueTasks.textContent, 10);
        currentOverdueNumber++;
        numberOfOverdueTasks.textContent = currentOverdueNumber;
    }
}
//******************************************************************************* */

function initializeOverdueTasksCount() {
    const today = new Date().toISOString().split('T')[0];
    const overdueTasks = tasks.filter(task => task.dueDate < today);
    const overdueNum = overdueTasks.length;
    numberOfOverdueTasks.textContent = overdueNum;
}

class Task {
    constructor(title, notes, dueDate, priority, projectKey, complete, key) {
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = getProjects().find(project => project.key == projectKey);
        this.complete = complete;
        this.key = key;
    }
};

function createTask(title, notes, dueDate, priority, projectKey, complete = false, key) {

}









