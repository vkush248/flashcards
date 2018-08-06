import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as data from "../../../db.json";
@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit{
  cardsArray = data.cards;
  constructor() { }

  // @Input() cards;
  ngOnInit(){
    console.log(this.cardsArray);
  }
}
