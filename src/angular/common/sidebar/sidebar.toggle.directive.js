import template from "./sidebar.toggle.html";

function sidebarToggleDirective(module) {

    module.directive("sdSidebarToggle", sdSidebarToggle);

    function sdSidebarToggle() {

        var controller = function($scope, $rootScope) {
            var vm = this;

            vm.toggle = function() {
                $rootScope.$broadcast("sd-sidebar-toggle");
            };

        };

        return {
            controller: controller,
            scope: {},
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            template: template
        };
    }

}

export default sidebarToggleDirective;
