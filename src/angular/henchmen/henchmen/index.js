import henchmenService from "./henchmen.factory";
import henchmenDirective from "./henchmen.directive";

function moduleLoader(module) {
    henchmenService(module);
    henchmenDirective(module);
}

export default moduleLoader;
