/**
 * Created by flangloi on 2016-09-20.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './../pojo/hero';
import { HeroService } from './../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroDetailComponent/hero-detail.component.html',
  styleUrls: ['app/heroDetailComponent/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    })
  }

  goBack(): void {
    window.history.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }

}
