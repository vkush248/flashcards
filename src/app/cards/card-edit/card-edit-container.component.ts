import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-edit-container',
  template: `
  <app-card-edit
    [card]="card$ | async"
    (save)="onUpdateCard($event)"
    (delete)="deleteCard($event)">
  </app-card-edit>`,
  styles: [],
})

export class CardEditContainerComponent {
  card$: Observable<Card>;
  id: number;
  private routeSubscription$: any;
  cards: any;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>
  ) {
    this.card$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      this.id = parseInt(params.get('id'), 10);
      return this.store.pipe(select(fromStore.selectCard, { id: this.id }));
    }));
  }

  deleteCard(id: Number) {
    this.store.dispatch(new fromStore.DeleteCard(id));
  }

  onUpdateCard(card: Card) {
    if (this.id) {
      this.store.dispatch(new fromStore.UpdateCard(card));
    } else {
      this.store.dispatch(new fromStore.AddCard(card));
    }
  }
}
