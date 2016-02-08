import widgetsDirective from "./widgets.directive";
import widgetDirective from "./widget.directive";
import statusDirective from "./status.directive";
import questDirective from "./quest.directive";
import henchmanDirective from "./henchman.directive";

function moduleLoader(module) {
    widgetsDirective(module);
    widgetDirective(module);
    statusDirective(module);
    questDirective(module);
    henchmanDirective(module);
}

export default moduleLoader;
