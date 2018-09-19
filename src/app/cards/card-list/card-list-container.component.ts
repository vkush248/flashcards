import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-list-container',
  template: `<app-card-list [cards]="cards$ | async"></app-card-list>`,
})

export class CardListContainerComponent {
  cards$: Observable<Card[]>;

  constructor(private store: Store<fromStore.AppState>, private router: Router) {
    this.store.dispatch(new fromStore.LoadCards());
    this.cards$ = this.store.pipe(select(fromStore.getAllCards));
  }
}
