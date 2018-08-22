import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-list-container',
  template: `<app-card-list [cards]=cards$></app-card-list>`,
})
export class CardListContainerComponent {
  cards$: Observable<Card[]>;

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(new fromStore.LoadCards());
    this.store.select(fromStore.SelectCards).subscribe((cards$: any) => {
      this.cards$ = cards$;
    });
  }
}
