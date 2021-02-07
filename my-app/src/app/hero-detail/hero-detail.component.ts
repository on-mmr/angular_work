import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor(
    private route : ActivatedRoute,
    private heroService : HeroService,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    let getId = this.route.snapshot.paramMap.get('id')
    let id: number;
    if(getId != null){
      id = +getId;
      this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    }else{
      throw new Error('idが存在しません');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
