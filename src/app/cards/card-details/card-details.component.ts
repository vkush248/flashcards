import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  id: number;
  card: Card;
  private sub: any;
  cardsArray$: Observable<Card[]>;

  constructor(private route: ActivatedRoute, private cardService: CardService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.cardsArray$ = this.cardService.getCards().pipe(
      pluck('cardsStore', 'data'),
      filter((val, ind) => ind % 1 === this.id - 1)
    );
  }

  ngOnInit(): void {
    this.cardsArray$.subscribe(console.log);
  }
}
