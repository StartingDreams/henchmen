import navProvider from "./nav.provider";
import navbarDirective from "./navbar.directive";
import sidebarDirective from "./sidebar.directive";

function moduleLoader(module) {
    navProvider(module);
    navbarDirective(module);
    sidebarDirective(module);
}

export default moduleLoader;
