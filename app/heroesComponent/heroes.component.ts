import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../poco/hero';
import { HeroService } from './../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroesComponent/heroes.component.html',
  styleUrls: ['app/heroesComponent/heroes.component.css']
})

export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() : void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void{
    let link = ['/detail', this.selectedHero.id ];
    this.router.navigate(link);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
