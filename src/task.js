//Load task list
let taskList =
  localStorage.getItem("tasklist") !== null
    ? JSON.parse(localStorage.getItem("tasklist"))
    : [];
let startingID =
  taskList && taskList.length > 0 ? taskList[taskList.length - 1].taskID : 0;

const createTask = (
  taskTitle,
  taskDescription,
  taskDuedate,
  taskPriority,
  forProject
) => {
  return {
    taskID: ++startingID,
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
};

const deleteTask = (selectedTaskID) => {
  const taskIndex = findTaskIndex(selectedTaskID);
  taskList.splice(taskIndex, 1);
  saveTasksToLocalStorage();
};

const updateProjectToTask = (oldProjectTitle, newProjectTitle) => {
  taskList.forEach((task) => {
    if (task.forProject === oldProjectTitle) task.forProject = newProjectTitle;
  });
  saveTasksToLocalStorage();
};

const deleteTasksOnDeletingProject = (projectTitle) => {
  taskList = taskList.filter((task) => task.forProject !== projectTitle);
  saveTasksToLocalStorage();
};

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


export {
  taskList,
  addTaskToList,
  deleteTask,
  updateProjectToTask,
  deleteTasksOnDeletingProject,
  getSeletedTask,
  saveTasksToLocalStorage
};
