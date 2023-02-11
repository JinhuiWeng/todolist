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

export {
  taskList,
  addTaskToList,
  getSeletedTask,
  saveTasksToLocalStorage,
  logTask,
};
