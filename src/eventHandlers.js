import {
  domPopup,
  displayProjectsToNav,
  displayTasks,
  displayTaskInformation,
} from "./domHandlers";

import {
  projectList,
  addProjectToList,
  editProject,
  deleteProject
} from "./project";

import {
  addTaskToList,
  deleteTask,
  updateProjectToTask,
  deleteTasksOnDeletingProject,
  getSeletedTask,
  saveTasksToLocalStorage,
} from "./task";

const iconClickHandlers = () => {
  let projectTitle;
  let selectedTaskID;
  let selectedTask;

  document.addEventListener("click", (e) => {
    let currentSelection = document.querySelector(".selected");
    //toggle menu
    if (e.target.classList.contains("toggle-menu-button") || e.target.classList.contains("fa-bars")) {
      const sidebarNav = document.querySelector(".sidebar-nav");
      sidebarNav.classList.toggle("hidden");
    }

    // cancel btn for all formns popup
    if (e.target.classList.contains("formbutton-cancel"))
      domPopup("close-forms");

    // create project popup
    if (e.target.classList.contains("plus-button-addproject")) {
      document.getElementById("createproject-title").value = "";
      domPopup("createprojectform-popup");
    }
    //edit project popup
    if (e.target.classList.contains("project-edit-icon")) {
      const getProjectBtn = e.target.parentNode.parentNode;
      projectTitle = getProjectBtn.innerText;
      switchActiveBtn(currentSelection, getProjectBtn);
      domPopup("editprojectform-popup");
      document.getElementById("editproject-title").value = projectTitle;
    }
    //delete project popup
    if (e.target.classList.contains("project-trash-icon")) {
      const getProjectBtn = e.target.parentNode.parentNode;
      projectTitle = getProjectBtn.innerText;
      switchActiveBtn(currentSelection, getProjectBtn);

      const projectP = document.getElementById("deleteProjectp");

      projectP.innerHTML = "";
      projectP.innerHTML = `Deleting project will also delete all its tasks. 
      Are you sure to delete project < ${projectTitle} >?`;
      domPopup("deleteprojectform-popup");
    }

    //create task popup
    if (e.target.classList.contains("plus-button-addtask")) {
      loadProjectOptionsToForm();
      domPopup("createtaskform-popup");
    }
    //edit task popup
    if (e.target.classList.contains("task-edit-icon")) {
      selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      selectedTask = getSeletedTask(selectedTaskID);

      loadProjectOptionsToForm();
      domPopup("edittaskform-popup");
      document.getElementById("edittask-title").value = selectedTask.taskTitle;
      document.getElementById("edittask-description").value =
        selectedTask.taskDescription;
      document.getElementById("edittask-duedate").value =
        selectedTask.taskDuedate;
    }

    //task delete popup
    if (e.target.classList.contains("task-trash-icon")) {
      selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      const toDisplay =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].wholeText;
      const taskP = document.getElementById("deleteTaskp");

      taskP.innerHTML = "";
      taskP.innerHTML = `Are you sure to delete task #${toDisplay} ?`;
      domPopup("deletetaskform-popup");
    }

    //task info popup
    if (e.target.classList.contains("task-info-icon")) {
      selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      selectedTask = getSeletedTask(selectedTaskID);
      displayTaskInformation(selectedTask);
      domPopup("taskinfo-popup");
    }

    //task star icon
    if (e.target.classList.contains("task-star-icon")) {
      selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      selectedTask = getSeletedTask(selectedTaskID);
      const importantStatus = selectedTask.isImportant === false ? true : false;
      selectedTask.isImportant = importantStatus;
      saveTasksToLocalStorage();
      displayTasks();
    }

    //task complete icon
    if (e.target.classList.contains("task-complete-icon")) {
      selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      selectedTask = getSeletedTask(selectedTaskID);
      const completedStatus = selectedTask.isCompleted === false ? true : false;
      selectedTask.isCompleted = completedStatus;
      saveTasksToLocalStorage();
      displayTasks();
    }
  });

  // form submit handlers
  document.addEventListener("submit", (e) => {
    let currentSelection = document.querySelector(".selected");
    let projectBtns = document.querySelector(".sidebar-nav-projects-body");
    let projectNavList = document.getElementById("sidebar-nav-projectlist");
    e.preventDefault();
    // create project submit
    if (e.target.getAttribute("name") === "createProjectForm") {
      const projectTitle = document.getElementById("createproject-title").value;

      addProjectToList(projectTitle);
      displayProjectsToNav();

      // make created project active
      switchActiveBtn(currentSelection, projectBtns.lastChild);

      domPopup("createprojectform-popup");
    }
    // edit project submit
    if (e.target.getAttribute("name") === "editProjectForm") {
      const newProjectTitle =
        document.getElementById("editproject-title").value;
      editProject(projectTitle, newProjectTitle);
      updateProjectToTask(projectTitle, newProjectTitle);
      displayProjectsToNav();

       // make edited project active
      let matchingElement = Array.from(
        projectNavList.querySelectorAll("button")
      ).find((el) => el.innerText === newProjectTitle);
      matchingElement.classList.toggle("selected");

      domPopup("editprojectform-popup");
    }
    // delete project submit
    if (e.target.getAttribute("name") === "deleteProjectForm") {
      deleteProject(projectTitle);
      deleteTasksOnDeletingProject(projectTitle);
      displayProjectsToNav();
      projectBtns.lastChild.classList.toggle("selected");

      domPopup("deleteprojectform-popup");
    }
    // create task submit
    if (e.target.getAttribute("name") === "createTaskForm") {
      const taskTitle = document.getElementById("createtask-title").value;
      const taskDescription = document.getElementById(
        "createtask-description"
      ).value;
      const taskDuedate = document.getElementById("createtask-duedate").value;
      const taskPriority = document.querySelector(
        '[name="prioritylist"]:checked'
      ).value;
      const forProject = document.getElementById("addtask-projectlist").value;
      addTaskToList(
        taskTitle,
        taskDescription,
        taskDuedate,
        taskPriority,
        forProject
      );
      domPopup("createtaskform-popup");

      let matchingElement = Array.from(
        projectNavList.querySelectorAll("button")
      ).find((el) => el.innerText === forProject);
      switchActiveBtn(currentSelection, matchingElement);
      document.getElementById("createTaskForm").reset();
    }
    // edit task submit
    if (e.target.getAttribute("name") === "editTaskForm") {
      let newForProject = document.getElementById("edittask-projectlist").value;
      let matchingElement = Array.from(
        projectNavList.querySelectorAll("button")
      ).find((el) => el.innerText === newForProject);

      selectedTask.taskTitle = document.getElementById("edittask-title").value;
      selectedTask.taskDescription = document.getElementById(
        "edittask-description"
      ).value;
      selectedTask.taskDuedate =
        document.getElementById("edittask-duedate").value;
      selectedTask.taskPriority = document.querySelector(
        '[name="prioritylist"]:checked'
      ).value;
      selectedTask.forProject = newForProject;
      saveTasksToLocalStorage();

      switchActiveBtn(currentSelection, matchingElement);
      domPopup("edittaskform-popup");
    }
    //delete task submit
    if (e.target.getAttribute("name") === "deleteTaskForm") {
      deleteTask(selectedTaskID);
      domPopup("deletetaskform-popup");
    }
    displayTasks();
    navClickHandlers(); // re-attach new sidebar to event listener after forms submit
  });
};

const navClickHandlers = () => {
  let navButtons = document.querySelectorAll(".sidebar-nav-btns");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //prevent double click
      while (
        !e.target.classList.contains("selected") &&
        !e.target.classList.contains("project-edit-icon") &&
        !e.target.classList.contains("project-trash-icon")
      ) {
        // handle selected
        let currentSelection = document.querySelector(".selected");
        switchActiveBtn(currentSelection, e.target);
      }
    });
  });
};

// add projects option to create task form
const loadProjectOptionsToForm = () => {
  let allOptionList = document.querySelectorAll(".task-projectlist");
  allOptionList.forEach((optionList) => {
    optionList.innerHTML = "";
    projectList.forEach(
      (project) =>
        (optionList.innerHTML += `<option value="${project.projectTitle}">${project.projectTitle}</option>`)
    );
  });
};

// Handle switching active button
const switchActiveBtn = (currentSelection, btn) => {
  currentSelection.classList.toggle("selected");

  btn.classList.toggle("selected");

  displayTasks();
};

export { iconClickHandlers, navClickHandlers };

