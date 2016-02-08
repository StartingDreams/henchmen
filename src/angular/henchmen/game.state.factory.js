function sdhGameStateService(module) {

    module.factory("sdhGameState", function(sdhQuestService) {

        var gameConfig = {
            starting: {
                quests: 3,
                henchmen: 3,
                treasure: 100
            }
        };

        var game = {};

        function reset() {
            game.treasure = gameConfig.starting.treasure;
            game.henchmen = [];
            game.quests = [];
        }

        function init() {
            reset();

            for (let i = 0; i < gameConfig.starting.quests; i++) {
                addQuest();
            }

            for (let i = 0; i < gameConfig.starting.henchmen; i++) {
                addHenchman();
            }
        }

        function addQuest() {
            game.quests.push(sdhQuestService.create());
        }

        function addHenchman() {
            //game.henchmen.push(sdhQuestService.create());
        }

        return {
            game: game,
            init: init,
            reset: reset,
            addQuest: addQuest
        };

    });
}

export default sdhGameStateService;
