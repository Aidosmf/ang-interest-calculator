import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CalculatorComponent }  from './components/calculator.component';
import { TodoComponent }  from './components/todo.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, CalculatorComponent, TodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
