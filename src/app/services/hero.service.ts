import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../components/interface/mock-heroes';
import { Hero } from '../components/interface/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {
    
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
