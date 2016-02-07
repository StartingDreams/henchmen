import angular from "angular";
import header from "./header";
import nav from "./nav";
import sidebar from "./sidebar";

var sdCommonModule = angular.module("sdCommon", []);

header(sdCommonModule);
nav(sdCommonModule);
sidebar(sdCommonModule);

export default sdCommonModule;