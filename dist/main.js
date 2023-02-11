/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domHandlers.js":
/*!****************************!*\
  !*** ./src/domHandlers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectsToNav": () => (/* binding */ displayProjectsToNav),
/* harmony export */   "displayTaskInformation": () => (/* binding */ displayTaskInformation),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "domPopup": () => (/* binding */ domPopup)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");






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

  _project__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project) => {
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

  _task__WEBPACK_IMPORTED_MODULE_1__.taskList.forEach((task) => {
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




/***/ }),

/***/ "./src/eventHandlers.js":
/*!******************************!*\
  !*** ./src/eventHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventHandlers": () => (/* binding */ eventHandlers)
/* harmony export */ });
/* harmony import */ var _domHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandlers */ "./src/domHandlers.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");






const eventHandlers = () => {
  document.addEventListener("click", (e) => {
    // cancel btn for all formns popup
    if (e.target.classList.contains("formbutton-cancel"))
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("close-forms");

    // create project popup
    if (e.target.classList.contains("plus-button-addproject")) {
      document.getElementById("createproject-title").value = "";
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("createprojectform-popup");
    }
    //edit project popup
    if (e.target.classList.contains("project-edit-icon")) {
      const oldProjectTitle = e.target.parentNode.parentNode.innerText;
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("editprojectform-popup");
      document.getElementById("editproject-title").value = oldProjectTitle;

      document
        .querySelector(".editproject-form")
        .addEventListener("submit", (e) => {
          const newProjectTitle =
            document.getElementById("editproject-title").value;
          e.preventDefault();
          (0,_project__WEBPACK_IMPORTED_MODULE_1__.editProject)(oldProjectTitle, newProjectTitle);
          (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayProjectsToNav)();
          (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("editprojectform-popup");
        });
    }
    //delete project popup
    if (e.target.classList.contains("project-trash-icon")) {
      const projectTitle = e.target.parentNode.parentNode.innerText;
      (0,_project__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectTitle);
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayProjectsToNav)();
    }

    //create task popup
    if (e.target.classList.contains("plus-button-addtask")) {
      loadProjectOptionsToForm();
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("createtaskform-popup");
    }
    //edit task popup
    if (e.target.classList.contains("task-edit-icon")) {
      const selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      const selectedTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.getSeletedTask)(selectedTaskID);

      loadProjectOptionsToForm();
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("edittaskform-popup");
      document.getElementById("edittask-title").value = selectedTask.taskTitle;
      document.getElementById("edittask-description").value =
        selectedTask.taskDescription;
      document.getElementById("edittask-duedate").value =
        selectedTask.taskDuedate;

      document
        .querySelector(".edittask-form")
        .addEventListener("submit", (e) => {
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
          e.preventDefault();
          (0,_task__WEBPACK_IMPORTED_MODULE_2__.saveTasksToLocalStorage)();
          // todo, edit task in project too
          (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();
          (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("edittaskform-popup");
        });
    }

    //task info popup
    if (e.target.classList.contains("task-info-icon")) {
      const selectedTaskID =
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
      const selectedTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.getSeletedTask)(selectedTaskID);
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayTaskInformation)(selectedTask);
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("taskinfo-popup");
    }
  });

  // form submit handlers
  document.addEventListener("submit", (e) => {
    if (e.target.getAttribute("name") === "createProjectForm") {
      const projectTitle = document.getElementById("createproject-title").value;
      e.preventDefault();
      (0,_project__WEBPACK_IMPORTED_MODULE_1__.addProjectToList)(projectTitle);
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayProjectsToNav)();
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("createprojectform-popup");
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
      const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.addTaskToList)(
        taskTitle,
        taskDescription,
        taskDuedate,
        taskPriority,
        forProject
      );

      (0,_project__WEBPACK_IMPORTED_MODULE_1__.addTaskToProject)(forProject, newTask);
      
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("createtaskform-popup");
      document.getElementById("createTaskForm").reset();
    }
    (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();
  });
};

// add projects option to create task form
const loadProjectOptionsToForm = () => {
  let allOptionList = document.querySelectorAll(".task-projectlist");
  allOptionList.forEach((optionList) => {
    optionList.innerHTML = "";
    _project__WEBPACK_IMPORTED_MODULE_1__.projectList.forEach(
      (project) =>
        (optionList.innerHTML += `<option value="${project.projectTitle}">${project.projectTitle}</option>`)
    );
  });
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToList": () => (/* binding */ addProjectToList),
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "getProjectsFromLocalStorage": () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   "logProject": () => (/* binding */ logProject),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
//load project list

let projectList;

if (localStorage.getItem("projectlist") === null) {
  projectList = [
    {
      projectTitle: "General(Default)",
      tasks: [],
    },
  ];
} else projectList = JSON.parse(localStorage.getItem("projectlist"));

const createProject = (projectTitle) => {
  return {
    projectTitle,
    tasks: [],
  };
};

const addProjectToList = (projectTitle) => {
  const newProject = createProject(projectTitle);
  projectList.push(newProject);
  saveProjectsToLocalStorage();
};

const editProject = (projectTitle, newProjectTitle) => {
  const projectIndex = findProjectIndex(projectTitle);

  projectList[projectIndex].projectTitle = newProjectTitle;
  saveProjectsToLocalStorage();
};

const deleteProject = (projectTitle) => {
  const projectIndex = findProjectIndex(projectTitle);
  projectList.splice(projectIndex, 1);
  saveProjectsToLocalStorage();
};

const addTaskToProject = (projectTitle, task) => {
  const projectIndex = findProjectIndex(projectTitle);
  projectList[projectIndex].tasks.push(task);
  saveProjectsToLocalStorage();
};

const findProjectIndex = (projectTitle) => {
  return projectList.findIndex((p) => p.projectTitle === projectTitle);
};

const saveProjectsToLocalStorage = () => {
  localStorage.setItem("projectlist", JSON.stringify(projectList));
};



const getProjectsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("projectlist"));
};

const logProject = () => {
  console.log(JSON.parse(localStorage.getItem("projectlist")));
};




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToList": () => (/* binding */ addTaskToList),
/* harmony export */   "getSeletedTask": () => (/* binding */ getSeletedTask),
/* harmony export */   "logTask": () => (/* binding */ logTask),
/* harmony export */   "saveTasksToLocalStorage": () => (/* binding */ saveTasksToLocalStorage),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
let taskList;
let taskID;

if (localStorage.getItem("tasklist") === null) {
  taskList = [];
  taskID = 0;
} else {
  taskList = JSON.parse(localStorage.getItem("tasklist"));
  taskID = taskList[taskList.length - 1].taskID;
}

const createTask = (
  taskTitle,
  taskDescription,
  taskDuedate,
  taskPriority,
  forProject
) => {
  return {
    taskID: ++taskID,
    taskTitle: taskTitle,
    taskDescription: taskDescription,
    taskDuedate: taskDuedate,
    taskPriority: taskPriority,
    forProject: forProject,
    isImportant: false,
    isCompleted: false,
  };
};

const addTaskToList = (
  taskTitle,
  taskDescription,
  taskDuedate,
  taskPriority,
  forProject
) => {
  const newTask = createTask(
    taskTitle,
    taskDescription,
    taskDuedate,
    taskPriority,
    forProject
  );
  taskList.push(newTask);
  saveTasksToLocalStorage();

  return newTask;
};

const deleteTask = (selectedTaskID) => {
  const taskIndex = findTaskIndex(selectedTaskID);
  taskList.splice(taskIndex, 1);
  saveTasksToLocalStorage();
};

// todo, remove/update task from projec
const getSeletedTask = (selectedTaskID) => {
  const taskIndex = findTaskIndex(selectedTaskID);
  return taskList[taskIndex];
};

const findTaskIndex = (selectedTaskID) => {
  return taskList.findIndex((p) => p.taskID == selectedTaskID);
};

const saveTasksToLocalStorage = () => {
  localStorage.setItem("tasklist", JSON.stringify(taskList));
};

const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasklist"));
};

const logTask = () => {
  console.log(JSON.parse(localStorage.getItem("tasklist")));
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventHandlers */ "./src/eventHandlers.js");
/* harmony import */ var _domHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHandlers */ "./src/domHandlers.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





(0,_domHandlers__WEBPACK_IMPORTED_MODULE_1__.displayProjectsToNav)();
(0,_domHandlers__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();

(0,_eventHandlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers)();
// clickHandlers();
// createProjectHandler();
// deleteProjectHandler()
// localStorage.clear();
(0,_task__WEBPACK_IMPORTED_MODULE_3__.logTask)();
(0,_project__WEBPACK_IMPORTED_MODULE_2__.logProject)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9FOzs7Ozs7O1VDcEZGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDNkI7QUFDVDtBQUNuQztBQUNqQztBQUNBLGtFQUFvQjtBQUNwQiwwREFBWTtBQUNaO0FBQ0EsNkRBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUFPO0FBQ1Asb0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2RvbUhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgcHJvamVjdExpc3QsXHJcbiAgYWRkUHJvamVjdFRvTGlzdCxcclxuICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsXHJcbn0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPLCBkaWZmZXJlbmNlSW5EYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG4vLyBjb25zdCBteVByb2plY3RzID0gcHJvamVjdHMoKTtcclxuXHJcbi8vRW50aXJlIHBvcHVwIHBhZ2VcclxuY29uc3QgcG9wdXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1kaXNwbGF5XCIpO1xyXG4vLyBQb3B1cCBDb250YWluZXJcclxuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNvbnRhaW5lclwiKTtcclxuLy8gQ2xvc2UgQWxsIEZvcm1zIFBvcHVwXHJcbmNvbnN0IGZvcm1zRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG8tY2xvc2VcIik7XHJcbi8vIHByb2plY3QgRm9ybSBQb3B1cFxyXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IHBvcHVwRGlzcGxheS5xdWVyeVNlbGVjdG9yKFwiLmFkZHByb2plY3QtZm9ybVwiKTtcclxuLy8gRWRpdCBwcm9qZWN0IGZvcm0gcG9wdXBcclxuY29uc3QgZWRpdFByb2plY3RGb3JtID0gcG9wdXBEaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdHByb2plY3QtZm9ybVwiKTtcclxuXHJcbi8vIENyZWF0ZSBUYXNrIEZvcm0gUG9wdXBcclxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBwb3B1cERpc3BsYXkucXVlcnlTZWxlY3RvcihcIi5hZGR0YXNrLWZvcm1cIik7XHJcbi8vIEVkaXQgVGFzayBGb3JtIFBvcHVwXHJcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IHBvcHVwRGlzcGxheS5xdWVyeVNlbGVjdG9yKFwiLmVkaXR0YXNrLWZvcm1cIik7XHJcbi8vIFRhc2sgSW5mbyBQb3B1cFxyXG5jb25zdCB0YXNrSW5mb1BvcHVwID0gcG9wdXBEaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoXCIudGFza2luZm8tZGl2XCIpO1xyXG4vLyBUYXNrIFByaW9yaXR5IFBvcHVwXHJcbmNvbnN0IGNyZWF0ZVRhc2tQcmlvcml0eURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuY3JlYXRlLXRhc2stcHJpb3JpdHktaW5zZXJ0XCJcclxuKTtcclxuY29uc3QgZWRpdFRhc2tQcmlvcml0eURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZWRpdC10YXNrLXByaW9yaXR5LWluc2VydFwiXHJcbik7XHJcbi8vIFRhc2sgUHJpb3JpdHkgT3B0aW9uc1xyXG5jb25zdCB0YXNrUHJpb3JpdHlPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRhc2stcHJpb3JpdHlcIik7XHJcblxyXG4vLyBUYXNrIFByb2plY3RzIE9wdGlvbnNcclxuY29uc3QgdGFza1Byb2plY3RzT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS10YXNrLXByb2plY3RcIik7XHJcblxyXG4vLyBHZXQgc2lkZWJhciBuYXZcclxuY29uc3QgZ2V0U2lkZWJhck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1uYXZcIik7XHJcbi8vIFNpZGViYXIgcHJvamVjdCBsaXN0XHJcbmNvbnN0IGdldFByb2plY3RsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLW5hdi1wcm9qZWN0bGlzdFwiKTtcclxuLy8gdGFzayBkaXNwbGF5XHJcbmNvbnN0IGdldFRhc2tkaXBsYXlkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcclxuXHJcbi8vIE1hbmFnZXMgcG9wdXBzXHJcbmNvbnN0IGRvbVBvcHVwID0gKHBvcHVwRm9yKSA9PiB7XHJcbiAgcG9wdXBEaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgLy8gcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgaWYgKHBvcHVwRm9yID09PSBcImNyZWF0ZXByb2plY3Rmb3JtLXBvcHVwXCIpXHJcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGlmIChwb3B1cEZvciA9PT0gXCJlZGl0cHJvamVjdGZvcm0tcG9wdXBcIilcclxuICAgIGVkaXRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG5cclxuICBpZiAocG9wdXBGb3IgPT09IFwiY3JlYXRldGFza2Zvcm0tcG9wdXBcIikge1xyXG4gICAgY3JlYXRlVGFza1ByaW9yaXR5RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjcmVhdGVUYXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9ucyk7XHJcbiAgICB0YXNrUHJpb3JpdHlPcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICBjcmVhdGVUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIH1cclxuICBpZiAocG9wdXBGb3IgPT09IFwiZWRpdHRhc2tmb3JtLXBvcHVwXCIpIHtcclxuICAgIGVkaXRUYXNrUHJpb3JpdHlEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGVkaXRUYXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5T3B0aW9ucyk7XHJcbiAgICB0YXNrUHJpb3JpdHlPcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICBlZGl0VGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICB9XHJcbiAgaWYgKHBvcHVwRm9yID09PSBcInRhc2tpbmZvLXBvcHVwXCIpIHRhc2tJbmZvUG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgaWYgKHBvcHVwRm9yID09PSBcImNsb3NlLWZvcm1zXCIpXHJcbiAgICBmb3Jtc0Rpc3BsYXkuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIikpO1xyXG59O1xyXG5cclxuLy8gUHJvamVjdHMgRGlzcGxheS9Mb2Fkc1xyXG5jb25zdCBkaXNwbGF5UHJvamVjdHNUb05hdiA9ICgpID0+IHtcclxuICBnZXRQcm9qZWN0bGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtZm9sZGVyLW9wZW5cIik7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1uYXYtcHJvamVjdHMtYm9keS1idG5cIik7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnByb2plY3RUaXRsZSk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIC8vIGNyZWF0ZVByb2plY3RJY29uR3JvdXBcclxuICAgIGNvbnN0IGljb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWNvbkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb24tZ3JvdXBcIik7XHJcblxyXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIFwiZmEtcmVndWxhclwiLFxyXG4gICAgICBcImZhLXBlbi10by1zcXVhcmVcIixcclxuICAgICAgXCJwcm9qZWN0LWVkaXQtaWNvblwiXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtdHJhc2gtY2FuXCIsIFwicHJvamVjdC10cmFzaC1pY29uXCIpO1xyXG5cclxuICAgIGljb25Hcm91cC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcbiAgICBpY29uR3JvdXAuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcclxuXHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoaWNvbkdyb3VwKTtcclxuICAgIGdldFByb2plY3RsaXN0LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBjb25kaXRpb24gb24gdGFza2xpc3QgZm9yIGRpc3BsYXlcclxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xyXG4gIGdldFRhc2tkaXBsYXlkaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrZGl2XCIpO1xyXG4gICAgdGFza2Rpdi5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3Rhc2sudGFza1ByaW9yaXR5fWApO1xyXG5cclxuICAgIGNvbnN0IHRhc2tkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tkaXYtdGl0bGVcIik7XHJcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhc2sudGFza0lEKTtcclxuICAgIHRhc2tkaXZUaXRsZS5hcHBlbmRDaGlsZChpZCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgLSAke3Rhc2sudGFza1RpdGxlfWApO1xyXG4gICAgdGFza2RpdlRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrZGl2RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrZGl2RHVlZGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza2Rpdi1kdWVkYXRlXCIpO1xyXG4gICAgdGFza2RpdkR1ZWRhdGUudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tEdWVkYXRlO1xyXG5cclxuICAgIC8vIEljb24gR3JvdXBcclxuICAgIGNvbnN0IGljb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWNvbkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb24tZ3JvdXBcIiwgXCJ0b29sdGlwXCIpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXBlbi10by1zcXVhcmVcIiwgXCJ0YXNrLWVkaXQtaWNvblwiKTtcclxuICAgIGNvbnN0IGVkaXRUb29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBlZGl0VG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XHJcbiAgICBlZGl0VG9vbHRpcC50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XHJcblxyXG4gICAgY29uc3QgaW5mb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGluZm9JY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWluZm9cIiwgXCJ0YXNrLWluZm8taWNvblwiKTtcclxuICAgIGNvbnN0IGluZm9Ub29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBpbmZvVG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XHJcbiAgICBpbmZvVG9vbHRpcC50ZXh0Q29udGVudCA9IFwiVGFzayBJbmZvcm1hdGlvblwiO1xyXG5cclxuICAgIGNvbnN0IHN0YXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBzdGFySWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXN0YXJcIiwgXCJ0YXNrLXN0YXItaWNvblwiKTtcclxuICAgIGNvbnN0IHN0YXJUb29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzdGFyVG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XHJcbiAgICBzdGFyVG9vbHRpcC50ZXh0Q29udGVudCA9IFwiTWFyayBUYXNrIEFzIEltcG9ydGFudFwiO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgY29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIFwiZmEtcmVndWxhclwiLFxyXG4gICAgICBcImZhLWNhbGVuZGFyLWNoZWNrXCIsXHJcbiAgICAgIFwidGFzay1jb21wbGV0ZS1pY29uXCJcclxuICAgICk7XHJcbiAgICBjb25zdCBjb21wbGV0ZVRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbXBsZXRlVG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XHJcbiAgICBjb21wbGV0ZVRvb2x0aXAudGV4dENvbnRlbnQgPSBcIk1hcmsgVGFzayBBcyBDb21wbGV0ZWRcIjtcclxuXHJcbiAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXRyYXNoLWNhblwiLCBcInRhc2stdHJhc2gtaWNvblwiKTtcclxuICAgIGNvbnN0IHRyYXNoVG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdHJhc2hUb29sdGlwLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwdGV4dFwiKTtcclxuICAgIHRyYXNoVG9vbHRpcC50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcclxuXHJcbiAgICBlZGl0SWNvbi5hcHBlbmRDaGlsZChlZGl0VG9vbHRpcCk7XHJcbiAgICBpbmZvSWNvbi5hcHBlbmRDaGlsZChpbmZvVG9vbHRpcCk7XHJcbiAgICBzdGFySWNvbi5hcHBlbmRDaGlsZChzdGFyVG9vbHRpcCk7XHJcbiAgICBjb21wbGV0ZUljb24uYXBwZW5kQ2hpbGQoY29tcGxldGVUb29sdGlwKTtcclxuICAgIHRyYXNoSWNvbi5hcHBlbmRDaGlsZCh0cmFzaFRvb2x0aXApO1xyXG5cclxuICAgIGljb25Hcm91cC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcbiAgICBpY29uR3JvdXAuYXBwZW5kQ2hpbGQoaW5mb0ljb24pO1xyXG4gICAgaWNvbkdyb3VwLmFwcGVuZENoaWxkKHN0YXJJY29uKTtcclxuICAgIGljb25Hcm91cC5hcHBlbmRDaGlsZChjb21wbGV0ZUljb24pO1xyXG4gICAgaWNvbkdyb3VwLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XHJcblxyXG4gICAgdGFza2Rpdi5hcHBlbmRDaGlsZCh0YXNrZGl2VGl0bGUpO1xyXG4gICAgdGFza2Rpdi5hcHBlbmRDaGlsZCh0YXNrZGl2RHVlZGF0ZSk7XHJcbiAgICB0YXNrZGl2LmFwcGVuZENoaWxkKGljb25Hcm91cCk7XHJcblxyXG4gICAgZ2V0VGFza2RpcGxheWRpdi5hcHBlbmRDaGlsZCh0YXNrZGl2KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrSW5mb3JtYXRpb24gPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGdldElEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvLXRhc2staWRcIik7XHJcbiAgY29uc3QgZ2V0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay10aXRsZVwiKTtcclxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby10YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gIGNvbnN0IGdldER1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay1kdWUtZGF0ZVwiKTtcclxuICBjb25zdCBnZXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby10YXNrLXByaW9yaXR5XCIpO1xyXG4gIGNvbnN0IGdldFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay1wcm9qZWN0XCIpO1xyXG5cclxuICAvLyBjbGVhciBvbiBwb3B1cFxyXG4gIGdldElELnRleHRDb250ZW50ID0gXCJcIjtcclxuICBnZXRUaXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZ2V0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGdldER1ZWRhdGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGdldFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBnZXRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgLy9sb2FkXHJcbiAgZ2V0SUQudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tJRDtcclxuICBnZXRUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGFza1RpdGxlO1xyXG4gIGdldERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay50YXNrRGVzY3JpcHRpb247XHJcbiAgZ2V0RHVlZGF0ZS50ZXh0Q29udGVudCA9IHRhc2sudGFza0R1ZWRhdGU7XHJcbiAgZ2V0UHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tQcmlvcml0eTtcclxuICBnZXRQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5mb3JQcm9qZWN0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZG9tUG9wdXAsIGRpc3BsYXlQcm9qZWN0c1RvTmF2LCBkaXNwbGF5VGFza3MsIGRpc3BsYXlUYXNrSW5mb3JtYXRpb24gfTtcclxuIiwiaW1wb3J0IHtcclxuICBkb21Qb3B1cCxcclxuICBkaXNwbGF5UHJvamVjdHNUb05hdixcclxuICBkaXNwbGF5VGFza3MsXHJcbiAgZGlzcGxheVRhc2tJbmZvcm1hdGlvbixcclxufSBmcm9tIFwiLi9kb21IYW5kbGVyc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBwcm9qZWN0TGlzdCxcclxuICBhZGRQcm9qZWN0VG9MaXN0LFxyXG4gIGVkaXRQcm9qZWN0LFxyXG4gIGRlbGV0ZVByb2plY3QsXHJcbiAgYWRkVGFza1RvUHJvamVjdCxcclxuICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsXHJcbn0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICB0YXNrTGlzdCxcclxuICBhZGRUYXNrVG9MaXN0LFxyXG4gIGdldFNlbGV0ZWRUYXNrLFxyXG4gIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlLFxyXG59IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmNvbnN0IGV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyBjYW5jZWwgYnRuIGZvciBhbGwgZm9ybW5zIHBvcHVwXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybWJ1dHRvbi1jYW5jZWxcIikpXHJcbiAgICAgIGRvbVBvcHVwKFwiY2xvc2UtZm9ybXNcIik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHByb2plY3QgcG9wdXBcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwbHVzLWJ1dHRvbi1hZGRwcm9qZWN0XCIpKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlcHJvamVjdC10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGRvbVBvcHVwKFwiY3JlYXRlcHJvamVjdGZvcm0tcG9wdXBcIik7XHJcbiAgICB9XHJcbiAgICAvL2VkaXQgcHJvamVjdCBwb3B1cFxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtZWRpdC1pY29uXCIpKSB7XHJcbiAgICAgIGNvbnN0IG9sZFByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pbm5lclRleHQ7XHJcbiAgICAgIGRvbVBvcHVwKFwiZWRpdHByb2plY3Rmb3JtLXBvcHVwXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gb2xkUHJvamVjdFRpdGxlO1xyXG5cclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5lZGl0cHJvamVjdC1mb3JtXCIpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHByb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlZGl0UHJvamVjdChvbGRQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICBkaXNwbGF5UHJvamVjdHNUb05hdigpO1xyXG4gICAgICAgICAgZG9tUG9wdXAoXCJlZGl0cHJvamVjdGZvcm0tcG9wdXBcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2RlbGV0ZSBwcm9qZWN0IHBvcHVwXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC10cmFzaC1pY29uXCIpKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pbm5lclRleHQ7XHJcbiAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcclxuICAgICAgZGlzcGxheVByb2plY3RzVG9OYXYoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NyZWF0ZSB0YXNrIHBvcHVwXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGx1cy1idXR0b24tYWRkdGFza1wiKSkge1xyXG4gICAgICBsb2FkUHJvamVjdE9wdGlvbnNUb0Zvcm0oKTtcclxuICAgICAgZG9tUG9wdXAoXCJjcmVhdGV0YXNrZm9ybS1wb3B1cFwiKTtcclxuICAgIH1cclxuICAgIC8vZWRpdCB0YXNrIHBvcHVwXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1lZGl0LWljb25cIikpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrSUQgPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGdldFNlbGV0ZWRUYXNrKHNlbGVjdGVkVGFza0lEKTtcclxuXHJcbiAgICAgIGxvYWRQcm9qZWN0T3B0aW9uc1RvRm9ybSgpO1xyXG4gICAgICBkb21Qb3B1cChcImVkaXR0YXNrZm9ybS1wb3B1cFwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0dGFzay10aXRsZVwiKS52YWx1ZSA9IHNlbGVjdGVkVGFzay50YXNrVGl0bGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHRhc2stZGVzY3JpcHRpb25cIikudmFsdWUgPVxyXG4gICAgICAgIHNlbGVjdGVkVGFzay50YXNrRGVzY3JpcHRpb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHRhc2stZHVlZGF0ZVwiKS52YWx1ZSA9XHJcbiAgICAgICAgc2VsZWN0ZWRUYXNrLnRhc2tEdWVkYXRlO1xyXG5cclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5lZGl0dGFzay1mb3JtXCIpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgIHNlbGVjdGVkVGFzay50YXNrVGl0bGUgPVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXR0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgICAgICAgc2VsZWN0ZWRUYXNrLnRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImVkaXR0YXNrLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICkudmFsdWU7XHJcbiAgICAgICAgICBzZWxlY3RlZFRhc2sudGFza0R1ZWRhdGUgPVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXR0YXNrLWR1ZWRhdGVcIikudmFsdWU7XHJcbiAgICAgICAgICBzZWxlY3RlZFRhc2sudGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJ1tuYW1lPVwicHJpb3JpdHlsaXN0XCJdOmNoZWNrZWQnXHJcbiAgICAgICAgICApLnZhbHVlO1xyXG4gICAgICAgICAgc2VsZWN0ZWRUYXNrLmZvclByb2plY3QgPVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJvamVjdGxpc3RcIikudmFsdWU7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgLy8gdG9kbywgZWRpdCB0YXNrIGluIHByb2plY3QgdG9vXHJcbiAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcclxuICAgICAgICAgIGRvbVBvcHVwKFwiZWRpdHRhc2tmb3JtLXBvcHVwXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGFzayBpbmZvIHBvcHVwXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1pbmZvLWljb25cIikpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrSUQgPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGdldFNlbGV0ZWRUYXNrKHNlbGVjdGVkVGFza0lEKTtcclxuICAgICAgZGlzcGxheVRhc2tJbmZvcm1hdGlvbihzZWxlY3RlZFRhc2spO1xyXG4gICAgICBkb21Qb3B1cChcInRhc2tpbmZvLXBvcHVwXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBmb3JtIHN1Ym1pdCBoYW5kbGVyc1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09PSBcImNyZWF0ZVByb2plY3RGb3JtXCIpIHtcclxuICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGFkZFByb2plY3RUb0xpc3QocHJvamVjdFRpdGxlKTtcclxuICAgICAgZGlzcGxheVByb2plY3RzVG9OYXYoKTtcclxuICAgICAgZG9tUG9wdXAoXCJjcmVhdGVwcm9qZWN0Zm9ybS1wb3B1cFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PT0gXCJjcmVhdGVUYXNrRm9ybVwiKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRldGFzay10aXRsZVwiKS52YWx1ZTtcclxuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJjcmVhdGV0YXNrLWRlc2NyaXB0aW9uXCJcclxuICAgICAgKS52YWx1ZTtcclxuICAgICAgY29uc3QgdGFza0R1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZXRhc2stZHVlZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnW25hbWU9XCJwcmlvcml0eWxpc3RcIl06Y2hlY2tlZCdcclxuICAgICAgKS52YWx1ZTtcclxuICAgICAgY29uc3QgZm9yUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkdGFzay1wcm9qZWN0bGlzdFwiKS52YWx1ZTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBuZXdUYXNrID0gYWRkVGFza1RvTGlzdChcclxuICAgICAgICB0YXNrVGl0bGUsXHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRhc2tEdWVkYXRlLFxyXG4gICAgICAgIHRhc2tQcmlvcml0eSxcclxuICAgICAgICBmb3JQcm9qZWN0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBhZGRUYXNrVG9Qcm9qZWN0KGZvclByb2plY3QsIG5ld1Rhc2spO1xyXG4gICAgICBcclxuICAgICAgZG9tUG9wdXAoXCJjcmVhdGV0YXNrZm9ybS1wb3B1cFwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrRm9ybVwiKS5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheVRhc2tzKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBhZGQgcHJvamVjdHMgb3B0aW9uIHRvIGNyZWF0ZSB0YXNrIGZvcm1cclxuY29uc3QgbG9hZFByb2plY3RPcHRpb25zVG9Gb3JtID0gKCkgPT4ge1xyXG4gIGxldCBhbGxPcHRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLXByb2plY3RsaXN0XCIpO1xyXG4gIGFsbE9wdGlvbkxpc3QuZm9yRWFjaCgob3B0aW9uTGlzdCkgPT4ge1xyXG4gICAgb3B0aW9uTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChcclxuICAgICAgKHByb2plY3QpID0+XHJcbiAgICAgICAgKG9wdGlvbkxpc3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0LnByb2plY3RUaXRsZX1cIj4ke3Byb2plY3QucHJvamVjdFRpdGxlfTwvb3B0aW9uPmApXHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZXZlbnRIYW5kbGVycyB9O1xyXG4iLCIvL2xvYWQgcHJvamVjdCBsaXN0XHJcblxyXG5sZXQgcHJvamVjdExpc3Q7XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0bGlzdFwiKSA9PT0gbnVsbCkge1xyXG4gIHByb2plY3RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICBwcm9qZWN0VGl0bGU6IFwiR2VuZXJhbChEZWZhdWx0KVwiLFxyXG4gICAgICB0YXNrczogW10sXHJcbiAgICB9LFxyXG4gIF07XHJcbn0gZWxzZSBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0bGlzdFwiKSk7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9qZWN0VGl0bGUsXHJcbiAgICB0YXNrczogW10sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RUb0xpc3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcclxuICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0UHJvamVjdCA9IChwcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5wcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0VGl0bGU7XHJcbiAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0VGl0bGUpO1xyXG4gIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG4gIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgdGFzaykgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgocHJvamVjdFRpdGxlKTtcclxuICBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2godGFzayk7XHJcbiAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IGZpbmRQcm9qZWN0SW5kZXggPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmRJbmRleCgocCkgPT4gcC5wcm9qZWN0VGl0bGUgPT09IHByb2plY3RUaXRsZSk7XHJcbn07XHJcblxyXG5jb25zdCBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RsaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RsaXN0XCIpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ1Byb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RsaXN0XCIpKSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHByb2plY3RMaXN0LFxyXG4gIGFkZFByb2plY3RUb0xpc3QsXHJcbiAgZWRpdFByb2plY3QsXHJcbiAgZGVsZXRlUHJvamVjdCxcclxuICBhZGRUYXNrVG9Qcm9qZWN0LFxyXG4gIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSxcclxuICBsb2dQcm9qZWN0LFxyXG59O1xyXG4iLCJsZXQgdGFza0xpc3Q7XHJcbmxldCB0YXNrSUQ7XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrbGlzdFwiKSA9PT0gbnVsbCkge1xyXG4gIHRhc2tMaXN0ID0gW107XHJcbiAgdGFza0lEID0gMDtcclxufSBlbHNlIHtcclxuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrbGlzdFwiKSk7XHJcbiAgdGFza0lEID0gdGFza0xpc3RbdGFza0xpc3QubGVuZ3RoIC0gMV0udGFza0lEO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYXNrID0gKFxyXG4gIHRhc2tUaXRsZSxcclxuICB0YXNrRGVzY3JpcHRpb24sXHJcbiAgdGFza0R1ZWRhdGUsXHJcbiAgdGFza1ByaW9yaXR5LFxyXG4gIGZvclByb2plY3RcclxuKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRhc2tJRDogKyt0YXNrSUQsXHJcbiAgICB0YXNrVGl0bGU6IHRhc2tUaXRsZSxcclxuICAgIHRhc2tEZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgdGFza0R1ZWRhdGU6IHRhc2tEdWVkYXRlLFxyXG4gICAgdGFza1ByaW9yaXR5OiB0YXNrUHJpb3JpdHksXHJcbiAgICBmb3JQcm9qZWN0OiBmb3JQcm9qZWN0LFxyXG4gICAgaXNJbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBhZGRUYXNrVG9MaXN0ID0gKFxyXG4gIHRhc2tUaXRsZSxcclxuICB0YXNrRGVzY3JpcHRpb24sXHJcbiAgdGFza0R1ZWRhdGUsXHJcbiAgdGFza1ByaW9yaXR5LFxyXG4gIGZvclByb2plY3RcclxuKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soXHJcbiAgICB0YXNrVGl0bGUsXHJcbiAgICB0YXNrRGVzY3JpcHRpb24sXHJcbiAgICB0YXNrRHVlZGF0ZSxcclxuICAgIHRhc2tQcmlvcml0eSxcclxuICAgIGZvclByb2plY3RcclxuICApO1xyXG4gIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XHJcbiAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgcmV0dXJuIG5ld1Rhc2s7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKHNlbGVjdGVkVGFza0lEKSA9PiB7XHJcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZFRhc2tJbmRleChzZWxlY3RlZFRhc2tJRCk7XHJcbiAgdGFza0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbi8vIHRvZG8sIHJlbW92ZS91cGRhdGUgdGFzayBmcm9tIHByb2plY1xyXG5jb25zdCBnZXRTZWxldGVkVGFzayA9IChzZWxlY3RlZFRhc2tJRCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRUYXNrSW5kZXgoc2VsZWN0ZWRUYXNrSUQpO1xyXG4gIHJldHVybiB0YXNrTGlzdFt0YXNrSW5kZXhdO1xyXG59O1xyXG5cclxuY29uc3QgZmluZFRhc2tJbmRleCA9IChzZWxlY3RlZFRhc2tJRCkgPT4ge1xyXG4gIHJldHVybiB0YXNrTGlzdC5maW5kSW5kZXgoKHApID0+IHAudGFza0lEID09IHNlbGVjdGVkVGFza0lEKTtcclxufTtcclxuXHJcbmNvbnN0IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza2xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tsaXN0XCIpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ1Rhc2sgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tsaXN0XCIpKSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHRhc2tMaXN0LFxyXG4gIGFkZFRhc2tUb0xpc3QsXHJcbiAgZ2V0U2VsZXRlZFRhc2ssXHJcbiAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UsXHJcbiAgbG9nVGFzayxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBldmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vZXZlbnRIYW5kbGVyc1wiO1xyXG5pbXBvcnQgeyBkb21Qb3B1cCwgZGlzcGxheVByb2plY3RzVG9OYXYsIGRpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2RvbUhhbmRsZXJzXCI7XHJcbmltcG9ydCB7IGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgbG9nUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgbG9nVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmRpc3BsYXlQcm9qZWN0c1RvTmF2KCk7XHJcbmRpc3BsYXlUYXNrcygpO1xyXG5cclxuZXZlbnRIYW5kbGVycygpO1xyXG4vLyBjbGlja0hhbmRsZXJzKCk7XHJcbi8vIGNyZWF0ZVByb2plY3RIYW5kbGVyKCk7XHJcbi8vIGRlbGV0ZVByb2plY3RIYW5kbGVyKClcclxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbmxvZ1Rhc2soKTtcclxubG9nUHJvamVjdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=