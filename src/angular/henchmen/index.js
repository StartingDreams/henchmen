import sdhHenchmen from "./henchmen.module";
import gameState from "./game.state.factory";
import dashboard from "./dashboard";
import henchmen from "./henchmen";
import quests from "./quests";
import navigation from "./navigation";
import widgets from "./widgets";

gameState(sdhHenchmen);
dashboard(sdhHenchmen);
henchmen(sdhHenchmen);
quests(sdhHenchmen);
navigation(sdhHenchmen);
widgets(sdhHenchmen);

export default sdhHenchmen;
