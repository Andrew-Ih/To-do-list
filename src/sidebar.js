import './styles/style.css';
import dashboard from './img/dashboard.svg';
import addButton from './img/add-button.svg';
import tasks from './img/tasks.svg';
import today from './img/calender.svg';
import overdue from './img/clock.svg';
import folder from './img/folder.svg';


function createSidebar () {
    //Create header content of sidebar
    const header = document.querySelector('.header');
    const dashboard_img = document.createElement('img');
    dashboard_img.classList.add('svg');
    dashboard_img.src = dashboard;
    header.appendChild(dashboard_img);

    // Add image to add task button 
    const addBtn_img = document.querySelector('.add-task-btn img');
    addBtn_img.src = addButton;

    const allTasks_img = document.querySelector('.all-tasks-btn img');
    allTasks_img.src = tasks;

    const today_img = document.querySelector('.today-btn img');
    today_img.src = today;

    const overdue_img = document.querySelector('.overdue-btn img');
    overdue_img.src = overdue;

    const website_img = document.querySelector('.website-btn img');
    website_img.src = folder;

    const video_img = document.querySelector('.video-btn img');
    video_img.src = folder;

}

export default createSidebar;