import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  id: number;
  card: Card;
  private sub: any;
  cardsArray$: Observable<Card>;

  constructor(private route: ActivatedRoute, private cardService: CardService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });

    this.cardsArray$ = this.cardService
      .getMockedCards()
      .pipe(pluck(String(this.id - 1)));
  }

  ngOnInit(): void {
    this.cardsArray$.subscribe(card => {
      this.card = card;
    });
  }
}
