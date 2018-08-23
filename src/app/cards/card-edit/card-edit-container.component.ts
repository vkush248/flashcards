import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-edit-container',
  template: `<app-card-edit [id]="id" [card]="card"></app-card-edit>`,
  styles: [],
})
export class CardEditContainerComponent implements OnInit, OnDestroy {
  cardsArray$: any;
  card: Card;
  id: number;
  private sub: any;

  constructor(private cardService: CardService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });
    this.cardsArray$ = this.cardService
      .getCards()
      .pipe(pluck(String(this.id - 1)));
  }

  ngOnInit(): void {
    this.cardsArray$.subscribe(card => {
      this.card = card;
    });
  }
  ngOnDestroy(): void {
    this.cardsArray$.unsubscribe();
  }
}
