import { projectList } from "./project";

import { taskList } from "./task";

import { format, parseISO, differenceInDays } from "date-fns";

// Manages popups
const domPopup = (popupFor) => {
  //Entire popup page
  const popupDisplay = document.querySelector(".popup-display");
  // Close All Forms Popup
  const formsDisplay = document.querySelectorAll(".to-close");
  // project Form Popup
  const createProjectForm = popupDisplay.querySelector(".addproject-form");
  // Edit project form popup
  const editProjectForm = popupDisplay.querySelector(".editproject-form");
  // delete project form popup
  const deleteProjectForm = popupDisplay.querySelector(".deleteproject-form");

  // Create Task Form Popup
  const createTaskForm = popupDisplay.querySelector(".addtask-form");
  // Edit Task Form Popup
  const editTaskForm = popupDisplay.querySelector(".edittask-form");
  // Delete Task Form Popup
  const deleteTaskForm = popupDisplay.querySelector(".deletetask-form");

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

  popupDisplay.classList.toggle("hidden");

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
  if (popupFor === "deletetaskform-popup")
    deleteTaskForm.classList.toggle("hidden");

  if (popupFor === "deleteprojectform-popup")
    deleteProjectForm.classList.toggle("hidden");

  if (popupFor === "taskinfo-popup") taskInfoPopup.classList.toggle("hidden");

  if (popupFor === "close-forms")
    formsDisplay.forEach((el) => el.classList.add("hidden"));
};

// Projects Display/Loads
const displayProjectsToNav = () => {
  // Sidebar project list
  const getProjectlist = document.getElementById("sidebar-nav-projectlist");

  getProjectlist.textContent = "";

  projectList.forEach((project) => {
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-folder-open");

    const btn = document.createElement("button");
    btn.classList.add("sidebar-nav-btns");
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
      "clickable-icons",
      "project-edit-icon"
    );

    const trashIcon = document.createElement("i");
    trashIcon.classList.add(
      "fa-regular",
      "fa-trash-can",
      "clickable-icons",
      "project-trash-icon"
    );

    iconGroup.appendChild(editIcon);
    iconGroup.appendChild(trashIcon);

    btn.appendChild(iconGroup);
    getProjectlist.appendChild(btn);
  });
};

const displayTasks = () => {
  let selectedNav = document.querySelector(".selected");
  let taskToDisplay = [];
  let headerDiv = document.getElementById("task-display-header");
  const todayDate = format(new Date(), "yyyy-MM-dd");
  // task display
  const getTaskdiplaydiv = document.querySelector(".task-display-content");

  // check which nav button selected and pass relative values
  //all task
  if (selectedNav.getAttribute("id") === "all-task-btn") {
    taskToDisplay = taskList;
  }
  //today task
  else if (selectedNav.getAttribute("id") === "today-task-btn") {
    taskToDisplay = taskList.filter(
      (task) => task.taskDuedate === todayDate && task.isCompleted === false
    );
  }
  // week task
  else if (selectedNav.getAttribute("id") === "week-task-btn") {
    taskToDisplay = taskList.filter(
      (task) =>
        task.isCompleted === false &&
        differenceInDays(parseISO(task.taskDuedate), parseISO(todayDate)) >=
          0 &&
        differenceInDays(parseISO(task.taskDuedate), parseISO(todayDate)) <= 7
    );
  }
  //important task
  else if (selectedNav.getAttribute("id") === "important-task-btn") {
    taskToDisplay = taskList.filter(
      (task) => task.isImportant === true && task.isCompleted === false
    );
  }
  //completed task
  else if (selectedNav.getAttribute("id") === "completed-task-btn") {
    taskToDisplay = taskList.filter((task) => task.isCompleted === true);
  }
  //all projects tasks
  else {
    taskToDisplay = taskList.filter(
      (task) =>
        task.forProject === selectedNav.innerText && task.isCompleted === false
    );
  }

  let numberOfTasks = taskToDisplay.length;
  let titleToDisplay = `${selectedNav.innerText}(${numberOfTasks})`;

  //handle display
  getTaskdiplaydiv.innerHTML = "";
  headerDiv.innerText = "";
  headerDiv.innerText = titleToDisplay;

  taskToDisplay.map((task) => {
    //Insert each task and left border with priority color
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("taskdiv");
    taskdiv.classList.add(`priority-${task.taskPriority}`);

    //Title
    const taskdivTitle = document.createElement("div");
    taskdivTitle.classList.add("taskdiv-title");
    const id = document.createTextNode(task.taskID);
    taskdivTitle.appendChild(id);
    const title = document.createTextNode(` - ${task.taskTitle}`);
    taskdivTitle.appendChild(title);

    //Due Date
    const taskdivDuedate = document.createElement("div");
    taskdivDuedate.classList.add("taskdiv-duedate");
    taskdivDuedate.textContent = task.taskDuedate;

    // Icon Group
    const iconGroup = document.createElement("span");
    iconGroup.classList.add("task-icon-group", "tooltip");
    //Edit Icon
    const editIcon = document.createElement("i");
    editIcon.classList.add(
      "fa-regular",
      "fa-pen-to-square",
      "clickable-icons",
      "task-edit-icon"
    );
    const editTooltip = document.createElement("span");
    editTooltip.classList.add("tooltiptext");
    editTooltip.textContent = "Edit Task";
    //Info Icon
    const infoIcon = document.createElement("i");
    infoIcon.classList.add(
      "fa-solid",
      "fa-info",
      "clickable-icons",
      "task-info-icon"
    );
    const infoTooltip = document.createElement("span");
    infoTooltip.classList.add("tooltiptext");
    infoTooltip.textContent = "Task Information";
    //Star Icon
    const starIcon = document.createElement("i");
    const starShape = task.isImportant === false ? "fa-regular" : "fa-solid";
    starIcon.classList.add(
      starShape,
      "fa-star",
      "clickable-icons",
      "task-star-icon"
    );
    const starTooltip = document.createElement("span");
    starTooltip.classList.add("tooltiptext");
    starTooltip.textContent = "Mark Task As Important";
    //Complete Icon
    const completeIcon = document.createElement("i");
    const completeShape =
      task.isCompleted === false ? "fa-regular" : "fa-solid";

    completeIcon.classList.add(
      completeShape,
      "fa-calendar-check",
      "clickable-icons",
      "task-complete-icon"
    );
    const completeTooltip = document.createElement("span");
    completeTooltip.classList.add("tooltiptext");
    completeTooltip.textContent = "Mark Task As Completed";
    //Trash Icon
    const trashIcon = document.createElement("i");
    trashIcon.classList.add(
      "fa-regular",
      "fa-trash-can",
      "clickable-icons",
      "task-trash-icon"
    );
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
