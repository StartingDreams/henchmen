import template from "./status.html";

function sdhStatusWidgetDirective(module) {

    module.directive("sdhStatusWidget", sdhStatusWidget);

    function sdhStatusWidget() {

        var controller = function($scope, sdhGameState) {
            var vm = this;
            vm.game = sdhGameState.game;
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            template: template
        };
    }

}

export default sdhStatusWidgetDirective;
