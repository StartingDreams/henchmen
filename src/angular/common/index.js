import angular from "angular";
import header from "./header";

var module = angular.module("sdCommon", []);

header(module);

export default module;