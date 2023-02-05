let taskID = 1;

if (localStorage.getItem("tasklist") === null) taskList = [];
else taskList = JSON.parse(localStorage.getItem("tasklist"));

const createTask = (
  dataProject,
  taskTitle,
  taskDetails,
  dueDate,
  priority,
  forProject
) => {
  return {
    dataProject,
    taskID: taskID++,
    taskTitle,
    taskDetails,
    dueDate,
    priority,
    forProject,
    isImportant: false,
    isCompleted: false,
  };
};

const addTaskToList = (taskTitle) => {
    const newTask = createTask(taskTitle);
    taskList.push(newTask);
    saveTasksToLocalStorage();
  };

const saveTasksToLocalStorage = () => {
  localStorage.setItem("tasklist", JSON.stringify(taskList));
};

const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasklist"));
};
