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

export {
  projectList,
  addProjectToList,
  editProject,
  deleteProject,
  addTaskToProject,
  getProjectsFromLocalStorage,
  logProject,
};
