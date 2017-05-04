"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var calculator_component_1 = require("./components/calculator.component");
var todo_component_1 = require("./components/todo.component");
var appRoutes = [
    {
        path: '',
        component: calculator_component_1.CalculatorComponent
    },
    {
        path: 'todo',
        component: todo_component_1.TodoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map