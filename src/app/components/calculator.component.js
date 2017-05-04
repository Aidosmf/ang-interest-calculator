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
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.principal = 0;
        this.rateOfInterest = 0;
        this.timePeriod = 0;
        this.compoundFrequency = 0;
        this.amount = {
            simpleCalculatedInterest: 0,
            totalSimple: 0,
            compoundCalculatedInterest: 0,
            totalCompound: 0
        };
    }
    CalculatorComponent.prototype.simpleInterest = function () {
        this.principal = parseFloat(document.getElementById('principalSimple').value);
        this.rateOfInterest = parseFloat(document.getElementById('interestSimple').value);
        this.timePeriod = parseFloat(document.getElementById('timePeriodSimple').value);
        this.rateOfInterest = this.rateOfInterest / 100;
        this.amount.simpleCalculatedInterest = this.principal * this.rateOfInterest * this.timePeriod;
        this.amount.totalSimple = (this.principal + this.amount.simpleCalculatedInterest).toFixed(2);
        // alert('Amount plus interest is $' + this.amount + '.');        
    };
    CalculatorComponent.prototype.compoundInterest = function () {
        this.principal = parseFloat(document.getElementById('principalCompound').value);
        this.rateOfInterest = parseFloat(document.getElementById('interestCompound').value);
        this.timePeriod = parseFloat(document.getElementById('timePeriodCompound').value);
        this.compoundFrequency = parseFloat(document.getElementById('compoundFrequency').value);
        this.rateOfInterest = this.rateOfInterest / 100;
        // let a = this.rateOfInterest / this.compoundFrequency;
        // let b = 1 + a;
        // let c = this.compoundFrequency * this.timePeriod;
        var d = Math.pow(1 + this.rateOfInterest / this.compoundFrequency, this.compoundFrequency * this.timePeriod);
        this.amount.totalCompound = (this.principal * d).toFixed(2);
        this.amount.compoundCalculatedInterest = this.amount.totalCompound - this.principal;
        // alert('Amount plus interest is $' + this.amount + '.');
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'calculator',
        templateUrl: 'calculator.component.html'
    }),
    __metadata("design:paramtypes", [])
], CalculatorComponent);
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map