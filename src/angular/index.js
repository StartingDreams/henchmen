import angular from "angular";

// initialize additional Angular
import "angular-ui-router";

// Register Angular "modules"
import "./common";

var sdApp = angular.module("sdApp", ["sdCommon"]);

sdApp.run(function($rootScope) {
    $rootScope.$on("sd-nav-item-selected", function(event, data) {
        console.log("selected", data.route);
    });

});

export default sdApp;