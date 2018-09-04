import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Card } from '../models/card.model';
import { ConfirmDeletingComponent } from './confirm-deleting-component';

export interface DialogData {
  answer: string;
}

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})

export class CardEditComponent implements OnChanges {
  cardKeys: Array<any>;
  form: FormGroup;
  answer: string;
  @Input() id: string;
  @Input() card: Card;
  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private _location: Location,
  ) {
    this.form = this.fb.group({
      topic: 'Your topic',
      wordEn: 'Word',
      exampleEn: 'collocation',
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeletingComponent, {
      width: '250px',
      data: { answer: this.answer }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.delete.emit(this.card.id); }
    });
  }

  updateCard(newCard: Card) {
    this.save.emit({ ...this.card, ...newCard });
  }

  goBack() {
    this.back.emit();
  }
}
