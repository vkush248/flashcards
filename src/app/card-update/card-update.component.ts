import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-update.component.scss']
})
export class CardUpdateComponent {
  @Input()
  card;

  constructor() {}
}
