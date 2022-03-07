import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((response) => (this.heroes = response));
  }

  /*  On Select
  dentro do constructor: private messageService: MessageService */

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    if (!(this.selectedHero === hero)) {
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
  }
}
