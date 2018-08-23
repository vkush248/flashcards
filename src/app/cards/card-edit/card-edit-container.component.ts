import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-edit-container',
  template: `<app-card-edit [id]="id" [card]="card" (back)="previousPage()"></app-card-edit>`,
  styles: [],
})
export class CardEditContainerComponent implements OnInit, OnDestroy {
  cardsArray$: any;
  card: Card;
  id: number;
  private sub: any;

  previousPage() {
    this._location.back();
  }
  constructor(private cardService: CardService, private route: ActivatedRoute, private _location: Location) {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });
    this.cardsArray$ = this.cardService
      .getCards()
      .pipe(pluck(String(this.id - 1)));
  }
  back() {
    console.log('123');
  }

  ngOnInit(): void {
    this.cardsArray$.subscribe(card => {
      this.card = card;
    });
  }
  ngOnDestroy(): void {
    // this.cardsArray$.unsubscribe();
    console.log(123);

  }
}
