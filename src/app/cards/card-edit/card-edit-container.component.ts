import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-edit-container',
  template: `<app-card-edit [id]="id" [card]="card" (subm)="onUpdateCard($event)" (back)="previousPage()" ></app-card-edit>`,
  styles: [],
})
export class CardEditContainerComponent implements OnInit, OnDestroy {
  card$: Observable<Card>;
  card: Card;
  id: number;
  private sub$: any;
  cardSubscription$: Subscription;

  previousPage() {
    this._location.back();
  }

  onUpdateCard(card: Card) {
    for (const key in card) {
      if (card.hasOwnProperty(key) && !card[key]) {
        card[key] = this.card[key];
      }
    }
    this.store.dispatch(new fromStore.UpdateCard(card));
  }

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private _location: Location,
    private store: Store<fromStore.AppState>
  ) {
    this.sub$ = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });
    if (this.id) {
      this.card$ = this.cardService
        .getCards()
        .pipe(pluck(String(this.id - 1)));
    } else {
      this.card$ = this.cardService.generateDefaultCard();
    }
  }

  ngOnInit(): void {
    this.cardSubscription$ = this.card$.subscribe(card => {
      this.card = card;
    });
  }

  ngOnDestroy(): void {
    this.cardSubscription$.unsubscribe();
    this.sub$.unsubscribe();
  }
}
