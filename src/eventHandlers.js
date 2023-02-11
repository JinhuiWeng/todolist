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
  deleteProject,
  addTaskToProject,
  getProjectsFromLocalStorage,
} from "./project";

import {
  taskList,
  addTaskToList,
  getSeletedTask,
  saveTasksToLocalStorage,
} from "./task";

const eventHandlers = () => {
  document.addEventListener("click", (e) => {
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
      const oldProjectTitle = e.target.parentNode.parentNode.innerText;
      domPopup("editprojectform-popup");
      document.getElementById("editproject-title").value = oldProjectTitle;

      document
        .querySelector(".editproject-form")
        .addEventListener("submit", (e) => {
          const newProjectTitle =
            document.getElementById("editproject-title").value;
          e.preventDefault();
          editProject(oldProjectTitle, newProjectTitle);
          displayProjectsToNav();
          domPopup("editprojectform-popup");
        });
    }
    //delete project popup
    if (e.target.classList.contains("project-trash-icon")) {
      const projectTitle = e.target.parentNode.parentNode.innerText;
      deleteProject(projectTitle);
      displayProjectsToNav();
    }

    //create task popup
    if (e.target.classList.contains("plus-button-addtask")) {
      loadProjectOptionsToForm();
      domPopup("createtaskform-popup");
    }
    //edit task popup
    if (e.target.classList.contains("task-edit-icon")) {
      const selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      const selectedTask = getSeletedTask(selectedTaskID);

      loadProjectOptionsToForm();
      domPopup("edittaskform-popup");
      document.getElementById("edittask-title").value = selectedTask.taskTitle;
      document.getElementById("edittask-description").value =
        selectedTask.taskDescription;
      document.getElementById("edittask-duedate").value =
        selectedTask.taskDuedate;

      document
        .querySelector(".edittask-form")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          selectedTask.taskTitle =
            document.getElementById("edittask-title").value;
          selectedTask.taskDescription = document.getElementById(
            "edittask-description"
          ).value;
          selectedTask.taskDuedate =
            document.getElementById("edittask-duedate").value;
          selectedTask.taskPriority = document.querySelector(
            '[name="prioritylist"]:checked'
          ).value;
          selectedTask.forProject =
            document.getElementById("task-projectlist").value;
          saveTasksToLocalStorage();
          // todo, edit task in project too
          displayTasks();
          domPopup("edittaskform-popup");
        });
    }

    //task info popup
    if (e.target.classList.contains("task-info-icon")) {
      const selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      const selectedTask = getSeletedTask(selectedTaskID);
      displayTaskInformation(selectedTask);
      domPopup("taskinfo-popup");
    }
  });

  // form submit handlers
  document.addEventListener("submit", (e) => {
    if (e.target.getAttribute("name") === "createProjectForm") {
      const projectTitle = document.getElementById("createproject-title").value;
      e.preventDefault();
      addProjectToList(projectTitle);
      displayProjectsToNav();
      domPopup("createprojectform-popup");
    }

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
      e.preventDefault();
      const newTask = addTaskToList(
        taskTitle,
        taskDescription,
        taskDuedate,
        taskPriority,
        forProject
      );

      addTaskToProject(forProject, newTask);
      
      domPopup("createtaskform-popup");
      document.getElementById("createTaskForm").reset();
    }
    displayTasks();
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

export { eventHandlers };
