import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.sass']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero | undefined;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}