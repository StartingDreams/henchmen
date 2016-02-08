import template from "./quest.html";

function sdhQuestWidgetDirective(module) {

    module.directive("sdhQuestWidget", sdhQuestWidget);

    function sdhQuestWidget() {

        var controller = function($scope) {
            var vm = this;
            vm.title = "Quest";
            vm.quest = $scope.quest;
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {
                quest: "="
            },
            template: template
        };
    }

}

export default sdhQuestWidgetDirective;
