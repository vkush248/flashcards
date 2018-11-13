import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../models/card.model';


@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})

export class CardEditComponent implements OnChanges {
  form: FormGroup;
  validations: any;
  @Input() card: Card;
  @Output() save: EventEmitter<Card> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      topic: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ])],
      word: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ])],
      example: '',
      context: '',
      translation: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(125),
      ])],
      exampleTranslation: '',
      contextTranslation: '',
    });

    this.validations = [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be at least 2 characters long' },
      { type: 'maxlength', message: 'This field cannot be more than 25 characters long' },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.card && changes.card.currentValue) {
      this.form.patchValue(this.card);
    }
  }

  updateCard(newCard: Card) {
    if (this.form.valid) { this.save.emit({ ...this.card, ...newCard }); }
  }
}
