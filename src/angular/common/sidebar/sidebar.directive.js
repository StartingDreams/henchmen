import template from "./sidebar.html";

function sidebarDirective(module) {

    module.directive("sdSidebar", sdSidebar);

    function sdSidebar() {

        var controller = function() {
            var vm = this;
        };

        return {
            controller: controller,
            transclude: true,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {},
            template: template
        };
    }

}

export default sidebarDirective;
