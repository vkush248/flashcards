import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../models/card.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[];
  @Output()
  addCard = new EventEmitter();

  goToAddCard() {
    this.addCard.emit();
  }
  constructor() { }
}
