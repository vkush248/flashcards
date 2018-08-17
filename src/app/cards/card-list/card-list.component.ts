import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cardsArray$: Observable<Card[]>;
  constructor(private cardService: CardService) {
    this.cardsArray$ = this.cardService
      .getCards()
      .pipe(pluck('cardsStore', 'data'));
  }

  ngOnInit() {}
}
