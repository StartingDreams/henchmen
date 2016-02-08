import sdhHenchmen from "./henchmen.module";
import dashboard from "./dashboard";
import henchmen from "./henchmen";
import quests from "./quests";
import navigation from "./navigation";
import widgets from "./widgets";

dashboard(sdhHenchmen);
henchmen(sdhHenchmen);
quests(sdhHenchmen);
navigation(sdhHenchmen);
widgets(sdhHenchmen);

export default sdhHenchmen;
