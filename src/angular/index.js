import angular from "angular";

// initialize additional Angular
import "angular-ui-router";

// Register Angular "modules"
import "./common";

var sdApp = angular.module("sdApp", ["sdCommon"]);

export default sdApp;