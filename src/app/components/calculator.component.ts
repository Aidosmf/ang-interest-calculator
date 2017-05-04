import { Component }    from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'calculator',
    templateUrl: 'calculator.component.html'    
})
export class CalculatorComponent  {  
    principal: any; 
    rateOfInterest: any;
    timePeriod: any;
    compoundFrequency: any;
    amount: amount;
    
    constructor(){
        this.principal = 0;
        this.rateOfInterest = 0;
        this.timePeriod = 0;
        this.compoundFrequency = 0;
        this.amount = { 
            simpleCalculatedInterest: 0,
            totalSimple: 0,
            compoundCalculatedInterest: 0,
            totalCompound: 0
        }
    }

    simpleInterest() {   
        this.principal = parseFloat((<HTMLInputElement>document.getElementById('principalSimple')).value);
        this.rateOfInterest = parseFloat((<HTMLInputElement>document.getElementById('interestSimple')).value);
        this.timePeriod = parseFloat((<HTMLInputElement>document.getElementById('timePeriodSimple')).value);        
        this.rateOfInterest = this.rateOfInterest / 100;
        this.amount.simpleCalculatedInterest = this.principal * this.rateOfInterest * this.timePeriod;
        this.amount.totalSimple = (this.principal + this.amount.simpleCalculatedInterest).toFixed(2);
        // alert('Amount plus interest is $' + this.amount + '.');        
    }    

    compoundInterest() {        
        
        this.principal = parseFloat((<HTMLInputElement>document.getElementById('principalCompound')).value);
        this.rateOfInterest = parseFloat((<HTMLInputElement>document.getElementById('interestCompound')).value);
        this.timePeriod = parseFloat((<HTMLInputElement>document.getElementById('timePeriodCompound')).value);
        this.compoundFrequency = parseFloat((<HTMLInputElement>document.getElementById('compoundFrequency')).value);
        this.rateOfInterest = this.rateOfInterest / 100;
        // let a = this.rateOfInterest / this.compoundFrequency;
        // let b = 1 + a;
        // let c = this.compoundFrequency * this.timePeriod;
        let d = Math.pow(1 + this.rateOfInterest / this.compoundFrequency, this.compoundFrequency * this.timePeriod);
        this.amount.totalCompound = (this.principal * d).toFixed(2);
        this.amount.compoundCalculatedInterest = this.amount.totalCompound - this.principal;
        // alert('Amount plus interest is $' + this.amount + '.');
    }    
}

interface amount{
    simpleCalculatedInterest: any;
    totalSimple: any;
    compoundCalculatedInterest: any;
    totalCompound: any;
}