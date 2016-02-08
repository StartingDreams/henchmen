import template from "./sidebar.html";

function sidebarDirective(module) {

    module.directive("sdhSidebar", sdSidebar);

    function sdSidebar() {

        var controller = function(sdhNav) {
            var vm = this;
            vm.navs = sdhNav.filter(function(nav) {
                return nav.sidebar === true;
            });
        };

        return {
            controller: controller,
            restrict: "E",
            controllerAs: "vm",
            replace: true,
            scope: {},
            template: template
        };
    }

}

export default sidebarDirective;
