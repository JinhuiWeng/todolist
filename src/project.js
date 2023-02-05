//load project list

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

export {
  projectList,
  addProjectToList,
  editProject,
  deleteProject,
  getProjectsFromLocalStorage,
  logProject,
};