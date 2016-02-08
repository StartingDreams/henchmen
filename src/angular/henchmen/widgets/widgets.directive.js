import template from "./widgets.html";

function widgetsDirective(module) {

    module.directive("sdhWidgets", sdhWidgets);

    function sdhWidgets() {

        var controller = function($scope) {
            var vm = this;
            vm.widgets = $scope.widgets;

            vm.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: true,
                pushing: true,
                floating: true,
                swapping: false,
                mobileModeEnabled: true
            };
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {
                widgets: "="
            },
            template: template
        };
    }

}

export default widgetsDirective;
