import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { Weapon, weapons, weaponsRu } from '../shared/interfaces/weapon';
import { Race, races } from '../shared/interfaces/race';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  weapons: Weapon[] = weaponsRu; 
  races: Race[] = races;
  viewMode: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getHero();
      this.viewMode = true;
    } else {
      this.hero = {} as Hero;
      this.viewMode = false;
    }    

    // this.translate.currentLang === 'ru' ? this.weapons = weaponsRu : this.weapons = weapons; 
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.translate.currentLang === 'ru' ? this.weapons = weaponsRu : null; 
  //   console.log(changes, this.translate.currentLang);
  // }

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