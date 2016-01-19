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
    var AddTodo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoActions_1_1) {
                todoActions_1 = todoActions_1_1;
            }],
        execute: function() {
            AddTodo = (function () {
                function AddTodo(appStore, todoActions) {
                    this.appStore = appStore;
                    this.todoActions = todoActions;
                }
                AddTodo.prototype.addTodo = function (input) {
                    this.appStore.dispatch(this.todoActions.addTodo(input.value));
                    input.value = '';
                };
                AddTodo = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        template: "<div>\n      <input #todo>\n      <button (click)=\"addTodo(todo)\">Add todo</button>\n    </div>"
                    }),
                    __param(0, core_1.Inject('AppStore')), 
                    __metadata('design:paramtypes', [Object, todoActions_1.TodoActions])
                ], AddTodo);
                return AddTodo;
            })();
            exports_1("AddTodo", AddTodo);
        }
    }
});

//# sourceMappingURL=addTodo.js.map
