import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';


interface weapon {
  id: number;
  name: string;
}

interface race {
  name: string;
}

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  viewMode: boolean = true;

  weapons: weapon[] = [
    {id: 1, name: 'swords'},
    {id: 2, name: 'claymores'},
    {id: 3, name: 'polearms'},
    {id: 4, name: 'catalysts'},
    {id: 5, name: 'bows'},
  ];

  races: race[] = [
    {name: 'witch'},
    {name: 'fairy'},
    {name: 'kitsune'},
    {name: 'tengu'},
    {name: 'pixie'},
  ];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    var param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getHero();
      this.viewMode = true;
    } else {
      this.hero = {} as Hero;
      this.viewMode = false;
    }
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      if (this.hero.id) {
        this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());
      } else {
        this.heroService.addHero(this.hero)
          .subscribe(hero => {
            this.router.navigateByUrl('/detail/' + hero.id);
          });
      }
    }
    this.viewMode = true;
  }

  update(): void {
    this.viewMode = !this.viewMode;
  }

}