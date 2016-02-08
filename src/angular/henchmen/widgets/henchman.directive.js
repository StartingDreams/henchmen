import template from "./henchman.html";

function sdhHenchmanWidgetDirective(module) {

    module.directive("sdhHenchmanWidget", sdhHenchmanWidget);

    function sdhHenchmanWidget() {

        var controller = function($scope) {
            var vm = this;
            vm.title = "Henchman";
            vm.henchman = $scope.henchman;
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {
                henchman: "="
            },
            template: template
        };
    }

}

export default sdhHenchmanWidgetDirective;
