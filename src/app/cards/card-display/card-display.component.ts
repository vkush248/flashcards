import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  cardsArray$: Observable<Card[]>;
  constructor(private cardService: CardService) {
    this.cardsArray$ = this.cardService
      .getCards()
      .pipe(pluck('cardsStore', 'data'));
  }

  ngOnInit() {
    // this.cardsArray$.subscribe(console.log);
  }
}
