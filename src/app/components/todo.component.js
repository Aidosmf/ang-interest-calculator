"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodoComponent = (function () {
    function TodoComponent() {
        this.tasks = ["User should be able to select one of the 2 options - Simple or Compound interest",
            "Depending on the options chosen by the user, following fields should be shown: principal rate of interest, time period, compound frequency(yearly, half yearly etc.)",
            "User should be able to fill these fields",
            "User should be to see the result - calculated interest and total amount when the calculate button is pressed",
            "Deploy the app on heroku",
            "Push your source code to a public repo on github"
        ];
    }
    TodoComponent.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TodoComponent.prototype.deleteTask = function (i) {
        this.tasks.splice(i, 1);
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo',
        templateUrl: 'todo.component.html'
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map