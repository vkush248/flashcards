import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() card;


  constructor() { }

}
