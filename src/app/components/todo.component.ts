import { Component } from '@angular/core';

@Component({  
  moduleId: module.id,
  selector: 'todo',
  templateUrl: 'todo.component.html'   
})
export class TodoComponent  { 
    tasks: string[];

    constructor() {
        this.tasks = ["User should be able to select one of the 2 options - Simple or Compound interest", 
                      "Depending on the options chosen by the user, following fields should be shown: principal rate of interest, time period, compound frequency(yearly, half yearly etc.)",
                      "User should be able to fill these fields",
                      "User should be to see the result - calculated interest and total amount when the calculate button is pressed",
                      "Deploy the app on heroku",
                      "Push your source code to a public repo on github"
                      ];
    }

    addTask(task: any) {
      this.tasks.push(task);
    }

    deleteTask(i: any){
      this.tasks.splice(i, 1);
    }
}
