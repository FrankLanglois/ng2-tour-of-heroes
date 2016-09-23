/**
 * Created by flangloi on 2016-09-21.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../pojo/hero';
import { HeroService } from './../services/hero.service'

@Component({
  selector:'my-dashboard',
  templateUrl: 'app/dashboardComponent/dashboard.component.html',
  styleUrls: ['app/dashboardComponent/dashboard.component.css']
})

export class DashBoardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router){}

  ngOnInit():void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetails(hero:Hero): void{
    let link = ['/detail', hero.id ];
    this.router.navigate(link);
  }

}
