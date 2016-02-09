import template from "./henchman.html";

function sdhHenchmanWidgetDirective(module) {

    module.directive("sdhHenchmanWidget", sdhHenchmanWidget);

    function sdhHenchmanWidget(sdhGameState) {

        var controller = function($scope) {
            var vm = this;
            vm.title = "Henchman";
            vm.henchman = $scope.henchman;

            vm.onQuest = function() {
                return vm.henchman.onQuest === true ? "On a quest!" : "Ready for a quest!";
            };

            vm.startQuest = function() {
                var nextQuest = sdhGameState.game.quests.find(function(quest) {
                    return quest.completed === false;
                });
                if (nextQuest) {
                    vm.henchman.startQuest(nextQuest);
                    console.log(vm.henchman);
                    console.log(nextQuest);
                }
            };
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
