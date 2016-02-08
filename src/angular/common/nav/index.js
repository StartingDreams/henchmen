import navDirective from "./nav.directive";
import navItemDirective from "./nav.item.directive";

function moduleLoader(module) {
    navDirective(module);
    navItemDirective(module);
}

export default moduleLoader;
