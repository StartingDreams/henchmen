import template from "./quests.html";

function questsDirective(module) {

    module.directive("sdhQuests", sdQuests);

    function sdQuests() {

        var controller = function() {
            var vm = this;
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {},
            template: template
        };
    }

}

export default questsDirective;
