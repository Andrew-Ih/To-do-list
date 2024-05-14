import './styles/style.css';

const addTaskDialog = document.querySelector('.add-task-dialog');
const addTaskButton = document.querySelector('.add-task-btn');
const addProjectDialog = document.querySelector('.add-new-project');
const addProjectButton = document.querySelector('.new-project');
const overlay = document.querySelector('.overlay');
const allTaskBtn = document.querySelector('.all-tasks-btn');
const todayBtn = document.querySelector('.today-btn');
const overdueBtn = document.querySelector('.overdue-btn');
const addBtn = document.querySelector('.add-task-btn');

let tasks = [];


const newTask1 = { title: 'Task 1', notes: 'Do something', dueDate: '2024-05-15', priority: 'High', project: 'Project A' };
const newTask2 = { title: 'Task 2', notes: 'Do something else', dueDate: '2024-05-20', priority: 'Medium', project: 'Project B' };

tasks.push(newTask1);
tasks.push(newTask2);


export function allTasksContainer() {
    const main = document.querySelector('.content');

    const allTaskContainer = document.createElement('div');
    allTaskContainer.classList.add('all-task-container');

    const allTaskeHeader = document.querySelector('.content-container h2');
    allTaskeHeader.innerHTML = "All Tasks (0)";

    main.appendChild(allTaskContainer);
}

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