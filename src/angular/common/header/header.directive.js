
import template from "./header.tmpl.html";

function headerDirective(module) {

    module.directive("sdHeader", sdHeader);

    function sdHeader() {

        var controller = function() {
            var vm = this;
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {},
            template: template
        };
    }

}

export default headerDirective;
