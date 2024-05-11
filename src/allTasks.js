import './styles/style.css';

export function allTasksContainer() {
    const main = document.querySelector('.content');

    const allTaskContainer = document.createElement('div');
    allTaskContainer.classList.add('all-task-container');

    const allTaskeHeader = document.querySelector('.content-container h2');
    allTaskeHeader.innerHTML = "All Tasks (0)";


    main.appendChild(allTaskContainer);

    const num = document.querySelector('.num');
    num.innerHTML = 10;
}

// const container = document.querySelector('.all-task-container');

export function addTasks() {
    const container = document.querySelector('.all-task-container');

    const task = document.createElement('div');
    task.classList.add('taskss');

    container.appendChild(task);
}