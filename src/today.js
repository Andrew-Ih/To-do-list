import './styles/style.css';


export function todayContainer() {
    const main = document.querySelector('.content');

    const allTaskContainer = document.createElement('div');
    allTaskContainer.classList.add('all-task-container');

    const allTaskeHeader = document.querySelector('.content-container h2');
    allTaskeHeader.innerHTML = "Today (0)";


    main.appendChild(allTaskContainer);

    const num = document.querySelector('.num');
    num.innerHTML = 10;
}

export function addTodays() {
    const main = document.querySelector('.content');

    
}