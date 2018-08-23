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
  newImageUrl: string;
  @Input() id: number;
  @Input() card: Card;
  @Output() back: EventEmitter<void> = new EventEmitter();

  constructor(private fb: FormBuilder, private _location: Location) { }

  updateCard(cardEditor: FormGroup) {
    console.log(cardEditor.getRawValue());
  }
  previousPage() {
    this.back.emit();
  }
  previewImage(event: any) {
    if (event.target.files[0].type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (eventReader: any) => {
        this.newImageUrl = eventReader.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log('Inappropriate file');
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
