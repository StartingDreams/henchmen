import faker from "faker";

function sdhQuestService(module) {

    module.factory("sdhQuestService", function($timeout, $q) {

        var questId = 1;

        class Quest {
            constructor(options) {
                this._id = questId;
                this._name = options.name;
                this._danger = 0;
                this._reward = 100;
                this._completed = false;
                this._henchmenKilled = [];
                this._henchmenCompleted = [];
                this._duration = 30;
                questId++;
            }

            get id() {
                return this._id;
            }

            get name() {
                return this._name;
            }

            get danger() {
                return this._danger;
            }

            get reward() {
                return this._reward;
            }

            get completed() {
                return this._completed;
            }

            get henchmenKilled() {
                return this._henchmenKilled;
            }

            get henchmenCompleted() {
                return this._henchmenCompleted;
            }

            get duration() {
                return this._duration;
            }

            attemptQuest(henchman) {
                var quest = this;

                if (!henchman) {
                    return $q.reject("Cannot attempt to complete a quest without a Henchman");
                }

                //$timeout(function() {
                //    henchman.complete(quest);
                //    henchman._onQuest = false;
                //    henchman._currentQuest = null;
                //}, quest.duration * 1000);
                //
                //this.complete(henchman);
                //henchman._currentQuestTimout = $
            }

            complete(henchman) {
                this._completed = true;
                this._henchmenCompleted.push(henchman);
            }

            toString() {
                return this._id + " " + this._name;
            }

        }

        function create() {
            var questData = {
                name: faker.lorem.sentences(2)
            };
            return new Quest(questData);
        }

        function reset() {
            questId = 1;
        }

        function init() {
            reset();
        }

        return {
            init: init,
            reset: reset,
            create: create
        };

    });
}

export default sdhQuestService;
