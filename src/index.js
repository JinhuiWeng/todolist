import { eventHandlers } from "./eventHandlers";
import { domPopup, displayProjectsToNav } from "./domHandlers";
import { getProjectsFromLocalStorage, logProject } from "./project";

displayProjectsToNav();

eventHandlers();
// clickHandlers();
// createProjectHandler();
// deleteProjectHandler()
// localStorage.clear();
// logProject();
