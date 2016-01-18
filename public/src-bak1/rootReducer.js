System.register(['./todoActions'], function(exports_1) {
    var TodoActions;
    var initialState;
    function rootReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case TodoActions.ADD_TODO:
                return {
                    todos: state.todos.concat({
                        id: action.id,
                        text: action.text,
                        completed: action.completed
                    }),
                    currentFilter: state.currentFilter
                };
            case TodoActions.TOGGLE_TODO:
                return {
                    todos: toggleTodo(state.todos, action),
                    currentFilter: state.currentFilter
                };
            case TodoActions.REMOVE_TODO:
                return {
                    todos: state.todos.filter(function (todo) { return todo.id != action.id; }),
                    currentFilter: state.currentFilter
                };
            case TodoActions.SET_CURRENT_FILTER:
                return {
                    todos: state.todos.map(function (todo) { return todo; }),
                    currentFilter: action.filter
                };
            default:
                return state;
        }
    }
    exports_1("rootReducer", rootReducer);
    function toggleTodo(todos, action) {
        //map returns new array
        return todos.map(function (todo) {
            //skip other items
            if (todo.id !== action.id)
                return todo;
            //toggle
            return {
                id: todo.id,
                text: todo.text,
                completed: !todo.completed
            };
        });
    }
    return {
        setters:[
            function (TodoActions_1) {
                TodoActions = TodoActions_1;
            }],
        execute: function() {
            initialState = {
                todos: [],
                currentFilter: 'SHOW_ALL'
            };
            ;
        }
    }
});

//# sourceMappingURL=rootReducer.js.map
