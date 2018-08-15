import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  id: number;
  card: Card;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.card = this.cardService.getCards()[this.id - 1];
    });
    console.log(this);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
