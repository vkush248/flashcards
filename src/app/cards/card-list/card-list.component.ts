import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.model';
import * as fromStore from '../../store';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cardsArray$: Observable<Card[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCards());
    this.cardsArray$ = this.store.select(fromStore.getCardState);
  }
}
