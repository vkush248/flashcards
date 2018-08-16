import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardsState } from '../models/cardsState.model';

@Injectable()
export class CardService {
  constructor(private store: Store<CardsState>) {}

  getCards(): any {
    return this.store.select(data => data);
  }
}
