import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" routerLink="/">Interest Calculator</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">            
              <li><a routerLink="/">Home</a></li>        
              <li><a routerLink="/todo">Todo</a></li>
            </ul>                    
          </div>
        </div>
      </div>
    </nav>   
    <router-outlet></router-outlet>`,
})
export class AppComponent  { 

}
