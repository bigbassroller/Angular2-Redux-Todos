System.register(['angular2/core', './filterLink'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, filterLink_1;
    var Filters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filterLink_1_1) {
                filterLink_1 = filterLink_1_1;
            }],
        execute: function() {
            Filters = (function () {
                function Filters() {
                }
                Filters = __decorate([
                    core_1.Component({
                        selector: 'filters',
                        template: '<p>Show: ' +
                            '<filter-link filter="SHOW_ALL">All</filter-link>, ' +
                            '<filter-link filter="SHOW_ACTIVE">Active</filter-link>, ' +
                            '<filter-link filter="SHOW_COMPLETED">Completed</filter-link>' +
                            '</p>',
                        directives: [filterLink_1.FilterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Filters);
                return Filters;
            })();
            exports_1("Filters", Filters);
        }
    }
});

//# sourceMappingURL=filters.js.map
