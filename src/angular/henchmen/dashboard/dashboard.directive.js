import template from "./dashboard.html";

function dashboardDirective(module) {

    module.directive("sdhDashboard", sdDashboard);

    function sdDashboard() {

        var controller = function($scope, sdhGameState) {
            var vm = this;
            vm.game = sdhGameState.game;
            console.log($scope.game);
        };

        return {
            controller: controller,
            controllerAs: "vm",
            scope: {},
            restrict: "E",
            replace: true,
            template: template
        };
    }

}

export default dashboardDirective;
