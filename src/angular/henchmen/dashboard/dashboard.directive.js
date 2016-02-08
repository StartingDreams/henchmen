import template from "./dashboard.html";

function dashboardDirective(module) {

    module.directive("sdhDashboard", sdDashboard);

    function sdDashboard() {

        var controller = function($scope) {
            var vm = this;

            vm.widgets = [
                {
                    name: "summary",
                    sizeX: 4,
                    sizeY: 2,
                    row: 0,
                    col: 0
                },
                {
                    name: "hire1",
                    sizeX: 4,
                    sizeY: 2,
                    row: 0,
                    col: 4
                },
                {
                    name: "hire2",
                    sizeX: 4,
                    sizeY: 2,
                    row: 0,
                    col: 8
                },
                {
                    title: "Small Widget 2",
                    sizeX: 12,
                    sizeY: 3,
                    row: 2,
                    col: 0
                }
            ];
        };

        return {
            controller: controller,
            restrict: "E",
            replace: true,
            controllerAs: "vm",
            scope: {},
            template: template
        };
    }

}

export default dashboardDirective;
