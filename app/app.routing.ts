/**
 * Created by flangloi on 2016-09-21.
 */
import { ModuleWithProviders } from '@angular/core';  // A wrapper around a module that also includes the providers.
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroesComponent/heroes.component';
import { DashBoardComponent } from './dashboardComponent/dashboard.component';
import { HeroDetailComponent } from './heroDetailComponent/hero-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);
