import template from "./henchmen.html";

function henchmenDirective(module) {

    module.directive("sdhHenchmen", sdHenchmen);

    function sdHenchmen() {

        var controller = function() {
            var vm = this;
        };

        return {
            controller: controller,
            replace: true,
            restrict: "E",
            controllerAs: "vm",
            scope: {},
            template: template
        };
    }

}

export default henchmenDirective;
