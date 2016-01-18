System.register(['angular2/core', './todo', './visibleTodosPipe'], function(exports_1) {
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
    var core_1, todo_1, visibleTodosPipe_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (visibleTodosPipe_1_1) {
                visibleTodosPipe_1 = visibleTodosPipe_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(appStore) {
                    var _this = this;
                    this.appStore = appStore;
                    this.unsubscribe = this.appStore.subscribe(function () {
                        var state = _this.appStore.getState();
                        _this.currentFilter = state.currentFilter;
                        _this.todos = state.todos;
                    });
                }
                TodoList.prototype.ngOnDestroy = function () {
                    //remove listener
                    this.unsubscribe();
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n    <ul>\n      <todo \n        *ngFor=\"#todo of todos | visibleTodos:currentFilter\"\n        [completed]=\"todo.completed\"\n        [id]=\"todo.id\"\n      >{{todo.text}}</todo>\n    </ul>\n  ",
                        directives: [todo_1.Todo],
                        pipes: [visibleTodosPipe_1.VisibleTodosPipe]
                    }),
                    __param(0, core_1.Inject('AppStore')), 
                    __metadata('design:paramtypes', [Object])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});

//# sourceMappingURL=todoList.js.map
