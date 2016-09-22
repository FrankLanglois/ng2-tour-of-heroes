import { NgModule }      from '@angular/core'; // Angular - the core framework
import { BrowserModule } from '@angular/platform-browser'; //library for using Angular in a web browser
import { FormsModule } from '@angular/forms'; // FormsModule: The ng module for forms.
import { HttpModule } from '@angular/http';  // The module that includes http's providers
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  from './appComponent/app.component';
import { ROUTING} from './app.routing';
import { DashBoardComponent } from './dashboardComponent/dashboard.component';
import { HeroesComponent } from './heroesComponent/heroes.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';
import { HeroSearchComponent } from './heroSearchComponent/hero-search.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ROUTING
  ],
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
