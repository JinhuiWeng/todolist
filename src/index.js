import { eventHandlers } from "./eventHandlers";
import { domPopup, displayProjectsToNav, displayTasks } from "./domHandlers";
import { getProjectsFromLocalStorage, logProject } from "./project";
import { logTask } from "./task";

displayProjectsToNav();
displayTasks();

eventHandlers();
// clickHandlers();
// createProjectHandler();
// deleteProjectHandler()
// localStorage.clear();
logTask();
logProject();
