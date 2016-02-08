import template from "./nav.item.html";

function navItemDirective(module) {

    module.directive("sdNavItem", sdNav);

    function sdNav() {

        var controller = function($scope) {

            var vm = this;
            vm.show = $scope.showLabel !== "false";
            vm.nav = $scope.nav;

        };

        return {
            controller: controller,
            restrict: "AE",
            replace: true,
            controllerAs: "vm",
            scope: {
                showLabel: "@",
                nav: "="
            },
            template: template
        };
    }

}

export default navItemDirective;
