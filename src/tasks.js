import './styles/style.css';

const addTaskDialog = document.querySelector('.add-task-dialog');
const addProjectDialog = document.querySelector('.add-new-project');
const overlay = document.querySelector('.overlay');

const numberOfAllTasks = document.querySelector('.all-tasks-num');
const numberOfTodayTasks = document.querySelector('.today-num');
const numberOfOverdueTasks = document.querySelector('.overdue-num');

const main = document.querySelector('.content');

let tasks = [];


const newTask1 = { title: 'Task 1', notes: 'Do something', dueDate: '2024-05-15', priority: 'High', project: 'Project A' };
const newTask2 = { title: 'Task 2', notes: 'Do something else', dueDate: '2024-05-20', priority: 'Medium', project: 'Project B' };

tasks.push(newTask1);
tasks.push(newTask2);

// numberOfAllTasks.textContent = tasks.length;


//******************************************************************************* */
//Creating the display container for AllTasks, Today and Overdue
//******************************************************************************* */
export function allTasksContainer() {
    const allTaskContainer = document.createElement('div');
    allTaskContainer.classList.add('all-task-container');

    const allTaskHeader = document.querySelector('.content-container h2');
    numberOfAllTasks.textContent = tasks.length;
    let AllTasksNum = tasks.length;
    allTaskHeader.innerHTML = "All Tasks (" + AllTasksNum + ")";

    main.appendChild(allTaskContainer);
}

export function todaysTasksContainer() {
    const todaysTasksContainer = document.createElement('div');
    todaysTasksContainer.classList.add('all-task-container');

    const todayHeader = document.querySelector('.content-container h2');
    let todayNum = tasks.length;
    todayHeader.innerHTML = "Today (" + todayNum + ")";

    main.appendChild(todaysTasksContainer);
}

export function overdueTasksContainer() {
    const overdueContainer = document.createElement('div');
    overdueContainer.classList.add('all-task-container');

    const overdueHeader = document.querySelector('.content-container h2');
    let overdueNum = tasks.length;
    overdueHeader.innerHTML = "Overdue (" + overdueNum + ")";

    main.appendChild(overdueContainer);
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

        displayTasks();
        incrementAllTasksNum();
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

export function displayTasks() {
    const tasksContainer = document.querySelector('.all-task-container');
    tasksContainer.innerHTML = ''; 

    // Iterate over each task in the tasks array
    tasks.forEach(task => {
        // Create HTML elements for the task
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const checkBoxContainer = document.createElement('div');
        checkBoxContainer.classList.add('check-box-container');

        //Create checkbox
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

        taskElement.appendChild(checkBoxContainer);
        taskElement.appendChild(taskDetailsContainer);

        // Append the task element to the tasks container
        tasksContainer.appendChild(taskElement);
    });
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






















// const container = document.querySelector('.all-task-container');

// export function addTasks() {
//     const container = document.querySelector('.all-task-container');

//     const task = document.createElement('div');
//     task.classList.add('taskss');

//     container.appendChild(task);
// }