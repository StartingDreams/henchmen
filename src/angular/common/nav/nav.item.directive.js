import template from "./nav.item.html";

function navItemDirective(module) {

    module.directive("sdNavItem", sdNav);

    function sdNav() {

        var link = function(scope, element, attr, ctrl) {

            scope.show = scope.showLabel !== "false";

            element.on("click", function(event) {
                event.stopPropagation();
                event.preventDefault();

                scope.isActive = function() {
                    return element === ctrl.activeElement;
                };

                scope.$apply(function() {
                    ctrl.setActiveElement(element);
                    ctrl.setRoute(scope.route);
                });
            });

        };

        return {
            require: "^sdNav",
            link: link,
            restrict: "AE",
            replace: true,
            scope: {
                label: "@",
                icon: "@",
                showLabel: "@",
                route: "@"
            },
            template: template
        };
    }

}

export default navItemDirective;
