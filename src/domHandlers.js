import {
  projectList,
  addProjectToList,
  getProjectsFromLocalStorage,
} from "./project";

import { taskList } from "./task";

import { format, parseISO, differenceInDays } from "date-fns";

// const myProjects = projects();

//Entire popup page
const popupDisplay = document.querySelector(".popup-display");
// Popup Container
const popupContainer = document.querySelector(".popup-container");
// Close All Forms Popup
const formsDisplay = document.querySelectorAll(".to-close");
// project Form Popup
const createProjectForm = popupDisplay.querySelector(".addproject-form");
// Edit project form popup
const editProjectForm = popupDisplay.querySelector(".editproject-form");

// Create Task Form Popup
const createTaskForm = popupDisplay.querySelector(".addtask-form");
// Edit Task Form Popup
const editTaskForm = popupDisplay.querySelector(".edittask-form");
// Task Info Popup
const taskInfoPopup = popupDisplay.querySelector(".taskinfo-div");
// Task Priority Popup
const createTaskPriorityDiv = document.querySelector(
  ".create-task-priority-insert"
);
const editTaskPriorityDiv = document.querySelector(
  ".edit-task-priority-insert"
);
// Task Priority Options
const taskPriorityOptions = document.querySelector(".form-task-priority");

// Task Projects Options
const taskProjectsOptions = document.querySelector(".form-task-project");

// Get sidebar nav
const getSidebarNav = document.querySelector(".sidebar-nav");
// Sidebar project list
const getProjectlist = document.getElementById("sidebar-nav-projectlist");
// task display
const getTaskdiplaydiv = document.querySelector(".task-display");

// Manages popups
const domPopup = (popupFor) => {
  popupDisplay.classList.toggle("hidden");
  // popupContainer.classList.toggle("hidden");

  if (popupFor === "createprojectform-popup")
    createProjectForm.classList.toggle("hidden");
  if (popupFor === "editprojectform-popup")
    editProjectForm.classList.toggle("hidden");

  if (popupFor === "createtaskform-popup") {
    createTaskPriorityDiv.innerHTML = "";
    createTaskPriorityDiv.appendChild(taskPriorityOptions);
    taskPriorityOptions.classList.toggle("hidden");
    createTaskForm.classList.toggle("hidden");
  }
  if (popupFor === "edittaskform-popup") {
    editTaskPriorityDiv.innerHTML = "";
    editTaskPriorityDiv.appendChild(taskPriorityOptions);
    taskPriorityOptions.classList.toggle("hidden");
    editTaskForm.classList.toggle("hidden");
  }
  if (popupFor === "taskinfo-popup") taskInfoPopup.classList.toggle("hidden");

  if (popupFor === "close-forms")
    formsDisplay.forEach((el) => el.classList.add("hidden"));
};

// Projects Display/Loads
const displayProjectsToNav = () => {
  getProjectlist.textContent = "";

  projectList.forEach((project) => {
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-folder-open");

    const btn = document.createElement("button");
    btn.classList.add("sidebar-nav-projects-body-btn");
    btn.appendChild(icon);

    const title = document.createTextNode(project.projectTitle);
    btn.appendChild(title);

    // createProjectIconGroup
    const iconGroup = document.createElement("span");
    iconGroup.classList.add("project-icon-group");

    const editIcon = document.createElement("i");
    editIcon.classList.add(
      "fa-regular",
      "fa-pen-to-square",
      "project-edit-icon"
    );

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-regular", "fa-trash-can", "project-trash-icon");

    iconGroup.appendChild(editIcon);
    iconGroup.appendChild(trashIcon);

    btn.appendChild(iconGroup);
    getProjectlist.appendChild(btn);
  });
};

// condition on tasklist for display
const displayTasks = () => {
  getTaskdiplaydiv.innerHTML = "";

  taskList.forEach((task) => {
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("taskdiv");
    taskdiv.classList.add(`priority-${task.taskPriority}`);

    const taskdivTitle = document.createElement("div");
    taskdivTitle.classList.add("taskdiv-title");
    const id = document.createTextNode(task.taskID);
    taskdivTitle.appendChild(id);
    const title = document.createTextNode(` - ${task.taskTitle}`);
    taskdivTitle.appendChild(title);

    const taskdivDuedate = document.createElement("div");
    taskdivDuedate.classList.add("taskdiv-duedate");
    taskdivDuedate.textContent = task.taskDuedate;

    // Icon Group
    const iconGroup = document.createElement("span");
    iconGroup.classList.add("task-icon-group", "tooltip");

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular", "fa-pen-to-square", "task-edit-icon");
    const editTooltip = document.createElement("span");
    editTooltip.classList.add("tooltiptext");
    editTooltip.textContent = "Edit Task";

    const infoIcon = document.createElement("i");
    infoIcon.classList.add("fa-solid", "fa-info", "task-info-icon");
    const infoTooltip = document.createElement("span");
    infoTooltip.classList.add("tooltiptext");
    infoTooltip.textContent = "Task Information";

    const starIcon = document.createElement("i");
    starIcon.classList.add("fa-regular", "fa-star", "task-star-icon");
    const starTooltip = document.createElement("span");
    starTooltip.classList.add("tooltiptext");
    starTooltip.textContent = "Mark Task As Important";

    const completeIcon = document.createElement("i");
    completeIcon.classList.add(
      "fa-regular",
      "fa-calendar-check",
      "task-complete-icon"
    );
    const completeTooltip = document.createElement("span");
    completeTooltip.classList.add("tooltiptext");
    completeTooltip.textContent = "Mark Task As Completed";

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-regular", "fa-trash-can", "task-trash-icon");
    const trashTooltip = document.createElement("span");
    trashTooltip.classList.add("tooltiptext");
    trashTooltip.textContent = "Delete Task";

    editIcon.appendChild(editTooltip);
    infoIcon.appendChild(infoTooltip);
    starIcon.appendChild(starTooltip);
    completeIcon.appendChild(completeTooltip);
    trashIcon.appendChild(trashTooltip);

    iconGroup.appendChild(editIcon);
    iconGroup.appendChild(infoIcon);
    iconGroup.appendChild(starIcon);
    iconGroup.appendChild(completeIcon);
    iconGroup.appendChild(trashIcon);

    taskdiv.appendChild(taskdivTitle);
    taskdiv.appendChild(taskdivDuedate);
    taskdiv.appendChild(iconGroup);

    getTaskdiplaydiv.appendChild(taskdiv);
  });
};

const displayTaskInformation = (task) => {
  const getID = document.querySelector(".info-task-id");
  const getTitle = document.querySelector(".info-task-title");
  const getDescription = document.querySelector(".info-task-description");
  const getDuedate = document.querySelector(".info-task-due-date");
  const getPriority = document.querySelector(".info-task-priority");
  const getProject = document.querySelector(".info-task-project");

  // clear on popup
  getID.textContent = "";
  getTitle.textContent = "";
  getDescription.textContent = "";
  getDuedate.textContent = "";
  getPriority.textContent = "";
  getProject.textContent = "";

  //load
  getID.textContent = task.taskID;
  getTitle.textContent = task.taskTitle;
  getDescription.textContent = task.taskDescription;
  getDuedate.textContent = task.taskDuedate;
  getPriority.textContent = task.taskPriority;
  getProject.textContent = task.forProject;
};

export { domPopup, displayProjectsToNav, displayTasks, displayTaskInformation };
