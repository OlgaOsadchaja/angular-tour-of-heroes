import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  raceStyle: string="";
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  setCardStyle(race: string) {
    switch (race) {
      case 'witch':
        this.raceStyle = 'witch';
        break;
      case 'fairy':
        this.raceStyle = 'fairy';
        break;  
      case 'kitsune':
        this.raceStyle = 'kitsune';
        break;   
      case 'tengu':
        this.raceStyle = 'tengu';
        break;  
      case 'pixie':
        this.raceStyle = 'pixie';
        break;      
    }
  }

  
}