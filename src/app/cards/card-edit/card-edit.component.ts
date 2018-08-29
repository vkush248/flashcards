import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  cardKeys: Array<any>;
  cardEditor: FormGroup;
  @Input() id: number;
  @Input() newImageUrl: string;
  @Input() card: Card;
  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() subm: EventEmitter<any> = new EventEmitter<any>();
  @Output() preview: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private _location: Location) { }

  updateCard(newCard: Card) {
    this.subm.emit(newCard);
  }

  previousPage() {
    this.back.emit();
  }
  previewImage(event: Event) {
    this.preview.emit(event);
  }

  ngOnInit(): void {
    this.cardKeys = Object.keys(this.card).filter(key => key !== 'id');

    this.cardEditor = this.fb.group({
      id: new FormControl(''),
      topic: new FormControl(''),
      wordEn: new FormControl(''),
      exampleEn: new FormControl(''),
      contextEn: new FormControl(''),
      img: new FormControl(''),
      wordRu: new FormControl(''),
      exampleRu: new FormControl(''),
      contextRu: new FormControl(''),
    });
  }
}
