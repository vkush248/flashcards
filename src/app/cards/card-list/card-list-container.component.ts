import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-card-list-container',
  template: `
    <div>
      <app-card-list [cardsArray$]=cardsArray$></app-card-list>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class CardListContainerComponent implements OnInit {
  cardsArray$: Observable<Card[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCards());
    this.cardsArray$ = this.store.select(fromStore.getCardState);
  }
}
