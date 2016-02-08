function sidebarToggleDirective(module) {

    module.directive("sdSidebarStatus", sdSidebarToggle);

    function sdSidebarToggle($animate) {

        var link = function(scope, element) {

            var visible = false;

            var isVisisble = function() {
                return visible;
            };

            scope.$on("sd-sidebar-toggle", function() {
                visible = !visible;
            });

            scope.$on("sd-sidebar-close", function() {
                visible = false;
            });

            scope.$on("sd-nav-item-selected", function() {
                visible = false;
            });

            scope.$on("$stateChangeStart",function() {
                visible = false;
            });

            scope.$watch(isVisisble, function() {
                // TODO: animation not working - only the main class is added
                // $animate[ visible ? "addClass" : "removeClass"](element, "sd-slide");
                element.toggleClass("sidebar-open", visible);
            });

        };

        return {
            priority: 0,
            link: link,
            restrict: "A"
        };
    }

}

export default sidebarToggleDirective;
