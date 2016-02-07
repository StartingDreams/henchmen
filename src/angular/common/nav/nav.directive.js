import template from "./nav.html";

function navDirective(module) {

    module.directive("sdNav", sdNav);

    function sdNav() {

        var link = function(scope, element, attr) {

        };

        var controller = function($scope, $rootScope) {
            var vm = this;

            vm.row = $scope.row !== "false";

            vm.setActiveElement = function(element) {
                vm.activeElement = element;
            };

            vm.setRoute = function(route) {
                $rootScope.$broadcast("sd-nav-item-selected", {route: route});
            };
        };

        return {
            controller: controller,
            link: link,
            scope: {
                row: "@"
            },
            transclude: true,
            restrict: "AE",
            controllerAs: "vm",
            replace: true,
            template: template
        };
    }

}

export default navDirective;
