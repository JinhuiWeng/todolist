import { domPopup, displayProjectsToNav } from "./domHandlers";

import {
  projectList,
  addProjectToList,
  editProject,
  deleteProject,
  getProjectsFromLocalStorage,
} from "./project";

const eventHandlers = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus-button-addtask")) {
      loadProjectOptionsToForm();
      domPopup("taskform-popup");
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
  });
};

// add projects option to create task form
const loadProjectOptionsToForm = () => {
  let optionList = document.getElementById("task-projectlist");
  optionList.innerHTML = "";
  projectList.forEach(
    (project) =>
      (optionList.innerHTML += `<option value="${project.projectTitle}">${project.projectTitle}</option>`)
  );
};

export { eventHandlers };
