import { Location } from '@angular/common';
import { Component /* , OnDestroy, OnInit */ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-edit-container',
  template: `
  <app-card-edit
    [id]="id"
    [card]="card$ | async"
    (subm)="onUpdateCard($event)"
    (delete)="deleteCard($event)"
    (back)="previousPage()" >
  </app-card-edit>`,
  styles: [],
})

export class CardEditContainerComponent {
  card$: Observable<Card>;
  id: number;
  cardSubscription$: Subscription;
  private sub$: any;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private _location: Location,
    private store: Store<fromStore.AppState>
  ) {
    this.sub$ = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });
    this.downloadCardData();
  }

  previousPage() {
    this._location.back();
  }

  deleteCard(card: Card) {
    this.store.dispatch(new fromStore.DeleteCard(card));
  }

  onUpdateCard(card: Card) {
    card.id = this.id;
    if (this.id) {
      this.store.dispatch(new fromStore.UpdateCard(card));
    } else {
      this.store.dispatch(new fromStore.AddCard(card));
    }
  }

  downloadCardData() {
    if (this.id) {
      this.card$ = this.cardService.getCard(this.id);
    } else {
      this.card$ = this.cardService.generateDefaultCard();
    }
  }
}
