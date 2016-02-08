import template from "./widget.html";

function widgetDirective(module) {

    module.directive("sdhWidget", sdhWidget);

    function sdhWidget() {

        return {
            restrict: "A",
            transclude: true,
            replace: true,
            scope: {
                title: "=",
                titleCenter: "="
            },
            template: template
        };
    }

}

export default widgetDirective;
