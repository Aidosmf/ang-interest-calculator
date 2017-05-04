import {ModuleWithProviders}    from '@angular/core';
import {Routes, RouterModule }  from '@angular/router';

import { CalculatorComponent } from './components/calculator.component';
import { TodoComponent }       from './components/todo.component';

const appRoutes: Routes = [
    {
        path: '',
        component: CalculatorComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);