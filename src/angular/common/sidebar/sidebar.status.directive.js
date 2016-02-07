function sidebarToggleDirective(module) {

    module.directive("sdSidebarStatus", sdSidebarToggle);

    function sdSidebarToggle() {

        var link = function(scope, element, attr, ctrl) {

            scope.showSidebar = false;

            scope.$on("sd-sidebar-toggle", function(event) {
                scope.showSidebar = !scope.showSidebar;
                element.toggleClass("sidebar-open", scope.showSidebar);
            });

        };

        return {
            link: link,
            restrict: "A",
            controllerAs: "vm"
        };
    }

}

export default sidebarToggleDirective;
