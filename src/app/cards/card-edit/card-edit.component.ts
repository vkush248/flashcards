import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Card } from '../models/card.model';


@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})

export class CardEditComponent implements OnChanges {
  form: FormGroup;
  @Input() card: Card;
  @Output() save: EventEmitter<Card> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      topic: 'Your topic',
      wordEn: 'Word',
      exampleEn: 'Some collocation',
      contextEn: 'Context',
      wordRu: 'Translation',
      exampleRu: 'Example translation',
      contextRu: 'Context translation',
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.card && changes.card.currentValue) {
      this.form.patchValue(this.card);
    }
  }

  updateCard(newCard: Card) {
    this.save.emit({ ...this.card, ...newCard });
  }
}
