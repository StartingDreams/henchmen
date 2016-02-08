import sidebarDirective from "./sidebar.directive";
import sidebarStatusDirective from "./sidebar.status.directive";
import sidebarToggleDirective from "./sidebar.toggle.directive";

function moduleLoader(module) {
    sidebarDirective(module);
    sidebarToggleDirective(module);
    sidebarStatusDirective(module);
}

export default moduleLoader;
