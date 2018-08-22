import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('cards$')
  cards: Card[];

  constructor() {}
}
