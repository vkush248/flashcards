import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent {

  constructor() { }

  @Input() cards;
}
