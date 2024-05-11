import './styles/style.css';


export function overdueContainer() {
    const main = document.querySelector('.content');

    const allTaskContainer = document.createElement('div');
    allTaskContainer.classList.add('all-task-container');

    const allTaskeHeader = document.querySelector('.content-container h2');
    allTaskeHeader.innerHTML = "Overdue (0)";


    main.appendChild(allTaskContainer);

    const num = document.querySelector('.num');
    num.innerHTML = 10;
}

export function addOverdues() {
    const container = document.querySelector('.all-task-container');

    // container.innerHTML = "<h1>HELOOOOOOOOO</h1>";
}