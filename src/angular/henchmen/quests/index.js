import questsDirective from "./quests.directive";
import questsService from "./quest.factory";

function moduleLoader(module) {
    questsDirective(module);
    questsService(module);
}

export default moduleLoader;
