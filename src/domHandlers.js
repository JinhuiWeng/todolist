import {
  projectList,
  addProjectToList,
  getProjectsFromLocalStorage,
} from "./project";

// const myProjects = projects();

//Entire popup page
const popupDisplay = document.querySelector(".popup-display");
// Close All Forms Popup
const formsDisplay = document.querySelectorAll(".to-close");
// project Form Popup
const createProjectForm = popupDisplay.querySelector(".addproject-form");
// Edit project form popup
const editProjectForm = popupDisplay.querySelector(".editproject-form");

// Task Form Popup
const taskForm = popupDisplay.querySelector(".addtask-form");

// Get sidebar nav
const getSidebarNav = document.querySelector(".sidebar-nav");
// Sidebar project list
const getProjectlist = document.getElementById("sidebar-nav-projectlist");

// Manages popups
const domPopup = (popupFor) => {
  popupDisplay.classList.remove("hidden");

  if (popupFor === "createprojectform-popup")
    createProjectForm.classList.toggle("hidden");
  if (popupFor === "editprojectform-popup")
    editProjectForm.classList.toggle("hidden");

  if (popupFor === "taskform-popup") taskForm.classList.toggle("hidden");

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

export { domPopup, displayProjectsToNav };
