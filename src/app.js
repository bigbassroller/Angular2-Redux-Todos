System.register(['angular2/core', './addTodo', './todoList', './filters'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, addTodo_1, todoList_1, filters_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addTodo_1_1) {
                addTodo_1 = addTodo_1_1;
            },
            function (todoList_1_1) {
                todoList_1 = todoList_1_1;
            },
            function (filters_1_1) {
                filters_1 = filters_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'root',
                        template: "<div>\n      <add-todo></add-todo>\n      <todo-list></todo-list>\n      <filters></filters>\n    </div>",
                        directives: [addTodo_1.AddTodo, todoList_1.TodoList, filters_1.Filters]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=app.js.map
