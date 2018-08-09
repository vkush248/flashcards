import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

import { getCards } from '../store/cards.reducer';
import { CardService } from '../services/card.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  cardsArray: Card[];
  constructor(private cardService: CardService) {
    this.cardsArray = this.cardService.getCards();
  }

  // @Input() cards;
  ngOnInit() {
    console.log(this.cardsArray);
  }
}
