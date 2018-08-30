import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { CardsState } from '../store';

@Component({
  selector: 'app-card-list-container',
  template: `<app-card-list [cards]="cards$ | async"></app-card-list>`,
})

export class CardListContainerComponent {
  cards$: Observable<CardsState>;

  constructor(private store: Store<fromStore.AppState>, private router: Router) {
    this.store.dispatch(new fromStore.LoadCards());
    this.cards$ = this.store.select(fromStore.selectCards);
  }
}
