System.register([], function(exports_1) {
    var ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_CURRENT_FILTER, TodoActions;
    return {
        setters:[],
        execute: function() {
            exports_1("ADD_TODO", ADD_TODO = 'ADD_TODO');
            exports_1("TOGGLE_TODO", TOGGLE_TODO = 'TOGGLE_TODO');
            exports_1("REMOVE_TODO", REMOVE_TODO = 'REMOVE_TODO');
            exports_1("SET_CURRENT_FILTER", SET_CURRENT_FILTER = 'SET_CURRENT_FILTER');
            TodoActions = (function () {
                function TodoActions() {
                    this.nextToDoId = 0;
                }
                TodoActions.prototype.addTodo = function (text) {
                    return {
                        type: ADD_TODO,
                        id: this.nextToDoId++,
                        text: text,
                        completed: false
                    };
                };
                ;
                TodoActions.prototype.toggleTodo = function (id) {
                    return {
                        type: TOGGLE_TODO,
                        id: id
                    };
                };
                ;
                TodoActions.prototype.removeTodo = function (id) {
                    return {
                        type: REMOVE_TODO,
                        id: id
                    };
                };
                TodoActions.prototype.setCurrentFilter = function (filter) {
                    return {
                        type: SET_CURRENT_FILTER,
                        filter: filter
                    };
                };
                ;
                return TodoActions;
            })();
            exports_1("TodoActions", TodoActions);
        }
    }
});

//# sourceMappingURL=todoActions.js.map
