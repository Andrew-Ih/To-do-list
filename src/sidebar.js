import './styles/style.css';
import dashboard from './img/dashboard.svg';
import addButton from './img/add-button.svg';
import tasks from './img/tasks.svg';
import today from './img/calender.svg';
import overdue from './img/clock.svg';
import folder from './img/folder.svg';

const addProjectDialog = document.querySelector('.add-new-project');
const overlay = document.querySelector('.overlay');

export function createSidebar () {
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

export function addNewProject(saveProjectButton) {
    // Add event listener to the save button inside the "Create New Project" dialog
    
    saveProjectButton.addEventListener('click', () => {
    // Get the value of the project title from the input field
    const projectTitle = document.getElementById('project_title').value;

    // Create a new project element
    const newProject = document.createElement('div');
    newProject.classList.add('project'); 

    // Create a button element for the new project
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-btn');
    // projectButton.textContent = projectTitle;

    // Create an image element for the folder icon
    const folderIcon = document.createElement('img');
    folderIcon.classList.add('svg');
    folderIcon.src = folder;

    // Create a div for the tasks-projects-left container
    const tasksProjectsLeft = document.createElement('div');
    tasksProjectsLeft.classList.add('tasks-projects-left');

    // Append the folder icon and project title to the tasks-projects-left container
    tasksProjectsLeft.appendChild(folderIcon);
    tasksProjectsLeft.appendChild(document.createTextNode(projectTitle));

    // Create a div for the project-num
    const projectNum = document.createElement('div');
    projectNum.classList.add('num');
    projectNum.classList.add('project-num'); 
    projectNum.textContent = '0';

    // Append the tasks-projects-left and project-num to the button
    projectButton.appendChild(tasksProjectsLeft);
    projectButton.appendChild(projectNum);

    // Append the project button to the new project element
    newProject.appendChild(projectButton);

    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.appendChild(newProject);

    addProjectDialog.close();

    const addProjectForm = document.querySelector('.add-project-form');
    addProjectForm.reset();

    overlay.style.display = 'none';
});
}