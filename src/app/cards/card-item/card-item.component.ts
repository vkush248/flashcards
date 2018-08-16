import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input()
  card;

  constructor() {}
}
