import template from "./widgets.html";

function widgetsDirective(module) {

    module.directive("sdhWidgets", sdhWidgets);

    function sdhWidgets() {

        var controller = function($scope) {
            $scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: true,
                pushing: true,
                floating: true,
                swapping: false,
                resizable: {enabled: false},
                draggable: {enabled: false}
            };
        };

        return {
            controller: controller,
            transclude: true,
            restrict: "A",
            template: template
        };
    }

}

export default widgetsDirective;
