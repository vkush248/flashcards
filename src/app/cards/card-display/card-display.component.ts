import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

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

  ngOnInit() {
    console.log(this.cardsArray);
  }
}
