function sdhNavProvider(module) {

    module.provider("sdhNav", function() {

        var nav = [
            {
                name: "henchmen",
                label: "Henchmen",
                url: "/henchmen",
                navbar: false,
                sidebar: false,
                views: {
                    "body@": {
                        template: '<div ui-view="body"></div>'
                    },
                    "navbar@": {
                        template: "<sdh-navbar></sdh-navbar>"
                    },
                    "sidebar@": {
                        template: "<sdh-sidebar></sdh-sidebar>"
                    }
                }
            },
            {
                name: "henchmen.dashboard",
                parent: "henchmen",
                icon: "fa-dashboard",
                label: "Dashboard",
                url: "/dashboard",
                navbar: true,
                sidebar: true,
                views: {
                    "body@henchmen": {
                        template: "<sdh-dashboard></sdh-dashboard>"
                    }
                }
            },
            {
                name: "henchmen.henchmen",
                parent: "henchmen",
                icon: "fa-users",
                label: "Henchmen",
                url: "/henchmen",
                navbar: true,
                sidebar: true,
                views: {
                    "body@henchmen": {
                        template: "<sdh-henchmen></sdh-henchmen>"
                    }
                }
            },
            {
                name: "henchmen.quests",
                parent: "henchmen",
                icon: "fa-fort-awesome",
                label: "Quests",
                url: "/quests",
                navbar: false,
                sidebar: true,
                views: {
                    "body@henchmen": {
                        template: "<sdh-quests></sdh-quests>"
                    }
                }
            }

        ];

        this.$get = function() {
            return nav;
        };

    });

}

export default sdhNavProvider;
