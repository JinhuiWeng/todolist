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
/* harmony export */   "domPopup": () => (/* binding */ domPopup)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


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




const eventHandlers = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus-button-addtask")) {
      loadProjectOptionsToForm();
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("taskform-popup");
    }

    // cancel btn for all formns
    if (e.target.classList.contains("formbutton-cancel"))
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("close-forms");

    // create project
    if (e.target.classList.contains("plus-button-addproject")) {
      document.getElementById("createproject-title").value = "";
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.domPopup)("createprojectform-popup");
    }
    //edit project
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
    //delete project
    if (e.target.classList.contains("project-trash-icon")) {
      const projectTitle = e.target.parentNode.parentNode.innerText;
      (0,_project__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectTitle);
      (0,_domHandlers__WEBPACK_IMPORTED_MODULE_0__.displayProjectsToNav)();
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
  });
};

const loadProjectOptionsToForm = () => {
  let optionList = document.getElementById("task-projectlist");
  optionList.innerHTML = "";
  _project__WEBPACK_IMPORTED_MODULE_1__.projectList.forEach(
    (project) =>
      (optionList.innerHTML += `<option value="${project.projectTitle}">${project.projectTitle}</option>`)
  );
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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "getProjectsFromLocalStorage": () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   "logProject": () => (/* binding */ logProject),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
//load project list
let projectList = [];

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

const editProject = (oldProjectTitle, newProjectTitle) => {
  const projectIndex = projectList.findIndex(
    (p) => p.projectTitle === oldProjectTitle
  );

  projectList[projectIndex].projectTitle = newProjectTitle;
  saveProjectsToLocalStorage();
};

const deleteProject = (projectTitle) => {
  const projectIndex = projectList.findIndex(
    (p) => p.projectTitle === projectTitle
  );
  projectList.splice(projectIndex, 1);
  saveProjectsToLocalStorage();
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




(0,_domHandlers__WEBPACK_IMPORTED_MODULE_1__.displayProjectsToNav)();

(0,_eventHandlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers)();
// clickHandlers();
// createProjectHandler();
// deleteProjectHandler()
// localStorage.clear();
// logProject();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUMwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXFCO0FBQy9EO0FBT21CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQVc7QUFDckIsVUFBVSxrRUFBb0I7QUFDOUIsVUFBVSxzREFBUTtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFhO0FBQ25CLE1BQU0sa0VBQW9CO0FBQzFCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQWdCO0FBQ3RCLE1BQU0sa0VBQW9CO0FBQzFCLE1BQU0sc0RBQVE7QUFDZDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBbUI7QUFDckI7QUFDQSxpREFBaUQscUJBQXFCLElBQUkscUJBQXFCO0FBQy9GO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRRTs7Ozs7OztVQzdERjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDZTtBQUNLO0FBQ3BFO0FBQ0Esa0VBQW9CO0FBQ3BCO0FBQ0EsNkRBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9kb21IYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgcHJvamVjdExpc3QsXHJcbiAgYWRkUHJvamVjdFRvTGlzdCxcclxuICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsXHJcbn0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuLy8gY29uc3QgbXlQcm9qZWN0cyA9IHByb2plY3RzKCk7XHJcblxyXG4vL0VudGlyZSBwb3B1cCBwYWdlXHJcbmNvbnN0IHBvcHVwRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtZGlzcGxheVwiKTtcclxuLy8gQ2xvc2UgQWxsIEZvcm1zIFBvcHVwXHJcbmNvbnN0IGZvcm1zRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG8tY2xvc2VcIik7XHJcbi8vIHByb2plY3QgRm9ybSBQb3B1cFxyXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IHBvcHVwRGlzcGxheS5xdWVyeVNlbGVjdG9yKFwiLmFkZHByb2plY3QtZm9ybVwiKTtcclxuLy8gRWRpdCBwcm9qZWN0IGZvcm0gcG9wdXBcclxuY29uc3QgZWRpdFByb2plY3RGb3JtID0gcG9wdXBEaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdHByb2plY3QtZm9ybVwiKTtcclxuXHJcbi8vIFRhc2sgRm9ybSBQb3B1cFxyXG5jb25zdCB0YXNrRm9ybSA9IHBvcHVwRGlzcGxheS5xdWVyeVNlbGVjdG9yKFwiLmFkZHRhc2stZm9ybVwiKTtcclxuXHJcbi8vIEdldCBzaWRlYmFyIG5hdlxyXG5jb25zdCBnZXRTaWRlYmFyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLW5hdlwiKTtcclxuLy8gU2lkZWJhciBwcm9qZWN0IGxpc3RcclxuY29uc3QgZ2V0UHJvamVjdGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItbmF2LXByb2plY3RsaXN0XCIpO1xyXG5cclxuLy8gTWFuYWdlcyBwb3B1cHNcclxuY29uc3QgZG9tUG9wdXAgPSAocG9wdXBGb3IpID0+IHtcclxuICBwb3B1cERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHJcbiAgaWYgKHBvcHVwRm9yID09PSBcImNyZWF0ZXByb2plY3Rmb3JtLXBvcHVwXCIpXHJcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGlmIChwb3B1cEZvciA9PT0gXCJlZGl0cHJvamVjdGZvcm0tcG9wdXBcIilcclxuICAgIGVkaXRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG5cclxuICBpZiAocG9wdXBGb3IgPT09IFwidGFza2Zvcm0tcG9wdXBcIikgdGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgaWYgKHBvcHVwRm9yID09PSBcImNsb3NlLWZvcm1zXCIpXHJcbiAgICBmb3Jtc0Rpc3BsYXkuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIikpO1xyXG59O1xyXG5cclxuLy8gUHJvamVjdHMgRGlzcGxheS9Mb2Fkc1xyXG5jb25zdCBkaXNwbGF5UHJvamVjdHNUb05hdiA9ICgpID0+IHtcclxuICBnZXRQcm9qZWN0bGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtZm9sZGVyLW9wZW5cIik7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1uYXYtcHJvamVjdHMtYm9keS1idG5cIik7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnByb2plY3RUaXRsZSk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIC8vIGNyZWF0ZVByb2plY3RJY29uR3JvdXBcclxuICAgIGNvbnN0IGljb25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgaWNvbkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb24tZ3JvdXBcIik7XHJcblxyXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIFwiZmEtcmVndWxhclwiLFxyXG4gICAgICBcImZhLXBlbi10by1zcXVhcmVcIixcclxuICAgICAgXCJwcm9qZWN0LWVkaXQtaWNvblwiXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtdHJhc2gtY2FuXCIsIFwicHJvamVjdC10cmFzaC1pY29uXCIpO1xyXG5cclxuICAgIGljb25Hcm91cC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcbiAgICBpY29uR3JvdXAuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcclxuXHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoaWNvbkdyb3VwKTtcclxuICAgIGdldFByb2plY3RsaXN0LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb21Qb3B1cCwgZGlzcGxheVByb2plY3RzVG9OYXYgfTtcclxuIiwiaW1wb3J0IHsgZG9tUG9wdXAsIGRpc3BsYXlQcm9qZWN0c1RvTmF2IH0gZnJvbSBcIi4vZG9tSGFuZGxlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgcHJvamVjdExpc3QsXHJcbiAgYWRkUHJvamVjdFRvTGlzdCxcclxuICBlZGl0UHJvamVjdCxcclxuICBkZWxldGVQcm9qZWN0LFxyXG4gIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSxcclxufSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG5jb25zdCBldmVudEhhbmRsZXJzID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBsdXMtYnV0dG9uLWFkZHRhc2tcIikpIHtcclxuICAgICAgbG9hZFByb2plY3RPcHRpb25zVG9Gb3JtKCk7XHJcbiAgICAgIGRvbVBvcHVwKFwidGFza2Zvcm0tcG9wdXBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FuY2VsIGJ0biBmb3IgYWxsIGZvcm1uc1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZvcm1idXR0b24tY2FuY2VsXCIpKVxyXG4gICAgICBkb21Qb3B1cChcImNsb3NlLWZvcm1zXCIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBwcm9qZWN0XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGx1cy1idXR0b24tYWRkcHJvamVjdFwiKSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZXByb2plY3QtdGl0bGVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb21Qb3B1cChcImNyZWF0ZXByb2plY3Rmb3JtLXBvcHVwXCIpO1xyXG4gICAgfVxyXG4gICAgLy9lZGl0IHByb2plY3RcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWVkaXQtaWNvblwiKSkge1xyXG4gICAgICBjb25zdCBvbGRQcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaW5uZXJUZXh0O1xyXG4gICAgICBkb21Qb3B1cChcImVkaXRwcm9qZWN0Zm9ybS1wb3B1cFwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0cHJvamVjdC10aXRsZVwiKS52YWx1ZSA9IG9sZFByb2plY3RUaXRsZTtcclxuXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdHByb2plY3QtZm9ybVwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZWRpdFByb2plY3Qob2xkUHJvamVjdFRpdGxlLCBuZXdQcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgZGlzcGxheVByb2plY3RzVG9OYXYoKTtcclxuICAgICAgICAgIGRvbVBvcHVwKFwiZWRpdHByb2plY3Rmb3JtLXBvcHVwXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9kZWxldGUgcHJvamVjdFxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtdHJhc2gtaWNvblwiKSkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaW5uZXJUZXh0O1xyXG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbiAgICAgIGRpc3BsYXlQcm9qZWN0c1RvTmF2KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGZvcm0gc3VibWl0IGhhbmRsZXJzXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT09IFwiY3JlYXRlUHJvamVjdEZvcm1cIikge1xyXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZXByb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICBkaXNwbGF5UHJvamVjdHNUb05hdigpO1xyXG4gICAgICBkb21Qb3B1cChcImNyZWF0ZXByb2plY3Rmb3JtLXBvcHVwXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZFByb2plY3RPcHRpb25zVG9Gb3JtID0gKCkgPT4ge1xyXG4gIGxldCBvcHRpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByb2plY3RsaXN0XCIpO1xyXG4gIG9wdGlvbkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICBwcm9qZWN0TGlzdC5mb3JFYWNoKFxyXG4gICAgKHByb2plY3QpID0+XHJcbiAgICAgIChvcHRpb25MaXN0LmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdC5wcm9qZWN0VGl0bGV9XCI+JHtwcm9qZWN0LnByb2plY3RUaXRsZX08L29wdGlvbj5gKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBldmVudEhhbmRsZXJzIH07XHJcbiIsIi8vbG9hZCBwcm9qZWN0IGxpc3RcclxubGV0IHByb2plY3RMaXN0ID0gW107XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0bGlzdFwiKSA9PT0gbnVsbCkge1xyXG4gIHByb2plY3RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICBwcm9qZWN0VGl0bGU6IFwiR2VuZXJhbChEZWZhdWx0KVwiLFxyXG4gICAgICB0YXNrczogW10sXHJcbiAgICB9LFxyXG4gIF07XHJcbn0gZWxzZSBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0bGlzdFwiKSk7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9qZWN0VGl0bGUsXHJcbiAgICB0YXNrczogW10sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RUb0xpc3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcclxuICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0UHJvamVjdCA9IChvbGRQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3RUaXRsZSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChcclxuICAgIChwKSA9PiBwLnByb2plY3RUaXRsZSA9PT0gb2xkUHJvamVjdFRpdGxlXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5wcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0VGl0bGU7XHJcbiAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuZmluZEluZGV4KFxyXG4gICAgKHApID0+IHAucHJvamVjdFRpdGxlID09PSBwcm9qZWN0VGl0bGVcclxuICApO1xyXG4gIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG4gIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RsaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0bGlzdFwiKSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2dQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0bGlzdFwiKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBwcm9qZWN0TGlzdCxcclxuICBhZGRQcm9qZWN0VG9MaXN0LFxyXG4gIGVkaXRQcm9qZWN0LFxyXG4gIGRlbGV0ZVByb2plY3QsXHJcbiAgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlLFxyXG4gIGxvZ1Byb2plY3QsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL2V2ZW50SGFuZGxlcnNcIjtcclxuaW1wb3J0IHsgZG9tUG9wdXAsIGRpc3BsYXlQcm9qZWN0c1RvTmF2IH0gZnJvbSBcIi4vZG9tSGFuZGxlcnNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlLCBsb2dQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZGlzcGxheVByb2plY3RzVG9OYXYoKTtcclxuXHJcbmV2ZW50SGFuZGxlcnMoKTtcclxuLy8gY2xpY2tIYW5kbGVycygpO1xyXG4vLyBjcmVhdGVQcm9qZWN0SGFuZGxlcigpO1xyXG4vLyBkZWxldGVQcm9qZWN0SGFuZGxlcigpXHJcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4vLyBsb2dQcm9qZWN0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==