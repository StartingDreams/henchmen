import angular from "angular";

var sdApp = angular.module("sdApp", [
    "sdCommon",
    "ui.router",
    "ngAnimate",
    "sdhHenchmen"
]);

sdApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({enabled: true});

    $urlRouterProvider.otherwise("/henchmen/dashboard");

});

sdApp.run(function($rootScope) {
    $rootScope.$on("sd-nav-item-selected", function(event, data) {
        console.log("selected", data.route);
    });
});

export default sdApp;
