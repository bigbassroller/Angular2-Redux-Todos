System.register(['angular2/core', './todoActions'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, todoActions_1;
    var FilterLink;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoActions_1_1) {
                todoActions_1 = todoActions_1_1;
            }],
        execute: function() {
            FilterLink = (function () {
                function FilterLink(appStore, todoActions) {
                    var _this = this;
                    this.appStore = appStore;
                    this.todoActions = todoActions;
                    this.unsubscribe = this.appStore
                        .subscribe(function () { return _this.updateActive(); });
                }
                FilterLink.prototype.ngOnInit = function () {
                    //set initial state
                    this.updateActive();
                };
                FilterLink.prototype.ngOnDestroy = function () {
                    //remove change listener
                    this.unsubscribe();
                };
                // Helper methods
                FilterLink.prototype.applyFilter = function (filter) {
                    this.appStore.dispatch(this.todoActions.setCurrentFilter(filter));
                };
                FilterLink.prototype.updateActive = function () {
                    this.active = (this.filter == this.appStore.getState().currentFilter);
                };
                FilterLink = __decorate([
                    core_1.Component({
                        selector: 'filter-link',
                        inputs: ['filter'],
                        template: "<a href=\"#\" (click)=\"applyFilter(filter);\"\n        [ngClass]=\"{'active': active, 'inactive': !active}\">" +
                            "<ng-content></ng-content>" +
                            "</a>"
                    }),
                    __param(0, core_1.Inject('AppStore')), 
                    __metadata('design:paramtypes', [Object, todoActions_1.TodoActions])
                ], FilterLink);
                return FilterLink;
            })();
            exports_1("FilterLink", FilterLink);
        }
    }
});

//# sourceMappingURL=filterLink.js.map
