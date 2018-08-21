import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input()
  cardsArray$: Card[];

  constructor() {}
}
