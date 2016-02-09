import faker from "faker";

function sdhHenchmanService(module) {

    module.factory("sdhHenchmanService", function($timeout) {

        var henchmanId = 1;
        var roles = ["Warrior", "Rogue", "Wizard", "Cleric"];

        class Henchman {
            constructor(options) {
                this._id = henchmanId;
                this._name = options.name;
                this._role = options.role;
                this._health = 100;
                this._maxHealth = 100;
                this._questsCompleted = [];
                this._onQuest = false;
                this._currentQuest = null;
                this._currentQuestTimout = null;
                henchmanId++;
            }

            get id() {
                return this._id;
            }

            get name() {
                return this._name;
            }

            get role() {
                return this._role;
            }

            get health() {
                return this._health;
            }

            get onQuest() {
                return this._onQuest;
            }

            get questsCompleted() {
                return this._questsCompleted;
            }

            startQuest(quest) {
                if (this._onQuest) {
                    return;
                }

                var henchman = this;
                henchman._currentQuest = quest;
                henchman._onQuest = true;



            }

            complete(quest) {
                quest.complete(this);
                this._questsCompleted.push(quest);
            }

            toString() {
                return this._id + " " + this._name;
            }

        }

        function create() {
            var henchmanData = {
                name: faker.name.firstName(),
                role: faker.random.arrayElement(roles)
            };
            return new Henchman(henchmanData);
        }

        function reset() {
            henchmanId = 1;
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

export default sdhHenchmanService;
