import template from "./widget.html";

function widgetDirective(module) {

    module.directive("sdhWidget", sdhWidget);

    function sdhWidget() {

        var controller = function($scope) {
            var vm = this;
            vm.widget = $scope.widget;
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {
                widget: "="
            },
            template: template
        };
    }

}

export default widgetDirective;
