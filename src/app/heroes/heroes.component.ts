import { Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  displayedColumns: string[] = ['hero-id','hero-name','hero-hp','hero-level','hero-weapons'];
  dataSource!: MatTableDataSource<Hero>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  clickedRows = new Set<Hero>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getAllHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getAllHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(dataSource => {
        this.dataSource = new MatTableDataSource<Hero>(dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  filterData($event : any) {
    this.dataSource.filter = $event.target.value;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}