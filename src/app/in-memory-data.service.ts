import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', hp: 808, level: 10, weapon: 'catalyst', stamina: 444, race: 'witch' },
      { id: 12, name: 'Narco', hp: 220, level: 13, weapon: 'sword', stamina: 550, race: 'fairy' },
      { id: 13, name: 'Bombasto', hp: 333, level: 85, weapon: 'bow', stamina: 360, race: 'kitsune' },
      { id: 14, name: 'Celeritas', hp: 320, level: 75, weapon: 'claymore', stamina: 390, race: 'tengu' },
      { id: 15, name: 'Magneta', hp: 355, level: 65, weapon: 'sword', stamina: 360, race: 'pixie' },
      { id: 16, name: 'Rubber', hp: 340, level: 22, weapon: 'polearm', stamina: 1000, race: 'tengu' },
      { id: 17, name: 'Dynama', hp: 100, level: 99, weapon: 'sword', stamina: 112, race: 'fairy' },
      { id: 18, name: 'Dr IQ', hp: 999, level: 100, weapon: 'catalyst', stamina: 930, race: 'witch' },
      { id: 19, name: 'Magma', hp: 1080, level: 20, weapon: 'catalyst', stamina: 800, race: 'kitsune' },
      { id: 20, name: 'Tornado', hp: 1999, level: 1, weapon: 'bow', stamina: 1200, race: 'pixie' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}