import angular from "angular";

var sdhHenchmen = angular.module("sdhHenchmen", [
    "ngAnimate",
    "ui.router",
    "gridster"
]);

sdhHenchmen.config(function(sdhNavProvider, $stateProvider) {

    var navs = sdhNavProvider.$get();

    navs.map(function(nav) {
        $stateProvider.state(nav.name, nav);
    });

});

sdhHenchmen.run(function(sdhQuestService, sdhGameState) {
    sdhGameState.init();
    sdhQuestService.init();
});

export default sdhHenchmen;
