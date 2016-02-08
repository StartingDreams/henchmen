import template from "./navbar.html";

function navbarDirective(module) {

    module.directive("sdhNavbar", sdNavbar);

    function sdNavbar() {

        var controller = function(sdhNav) {
            var vm = this;
            vm.navs = sdhNav.filter(function(nav) {
                return nav.navbar === true;
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

export default navbarDirective;
