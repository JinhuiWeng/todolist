//load project list

let projectList =
  localStorage.getItem("projectlist") === null
    ? [
        {
          projectTitle: "General(Default)",
        },
      ]
    : JSON.parse(localStorage.getItem("projectlist"));

const createProject = (projectTitle) => {
  return {
    projectTitle,
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

const findProjectIndex = (projectTitle) => {
  return projectList.findIndex((p) => p.projectTitle == projectTitle);
};

const saveProjectsToLocalStorage = () => {
  localStorage.setItem("projectlist", JSON.stringify(projectList));
};

const getProjectsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("projectlist"));
};

export {
  projectList,
  addProjectToList,
  editProject,
  deleteProject,
  getProjectsFromLocalStorage,
};
