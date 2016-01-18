System.register(['angular2/platform/browser', 'angular2/core', './app', 'redux', './rootReducer', './todoActions'], function(exports_1) {
    var browser_1, core_1, app_1, redux_1, rootReducer_1, todoActions_1;
    var appStore;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (rootReducer_1_1) {
                rootReducer_1 = rootReducer_1_1;
            },
            function (todoActions_1_1) {
                todoActions_1 = todoActions_1_1;
            }],
        execute: function() {
            appStore = redux_1.createStore(rootReducer_1.rootReducer);
            browser_1.bootstrap(app_1.App, [
                core_1.provide('AppStore', { useValue: appStore }),
                todoActions_1.TodoActions
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=main.js.map
