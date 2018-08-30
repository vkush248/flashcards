import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
export class CardEditComponent implements OnInit {
  cardKeys: Array<any>;
  cardEditor: FormGroup;
  answer: string;
  @Input() id: number;
  @Input() card: Card;
  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() subm: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private _location: Location,
    public dialog: MatDialog,
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeletingComponent, {
      width: '250px',
      data: { answer: this.answer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.delete.emit(this.card); }
    });
  }

  updateCard(newCard: Card) {
    newCard.img = this.card.img;
    this.subm.emit(newCard);
  }

  previousPage() {
    this.back.emit();
  }

  ngOnInit(): void {
    this.cardKeys = Object.keys(this.card).filter(key => key !== 'id');

    this.cardEditor = this.fb.group({
      id: new FormControl(this.card.id),
      topic: new FormControl(this.card.topic),
      wordEn: new FormControl(this.card.wordEn),
      exampleEn: new FormControl(this.card.exampleEn),
      contextEn: new FormControl(this.card.contextEn),
      wordRu: new FormControl(this.card.wordRu),
      exampleRu: new FormControl(this.card.exampleRu),
      contextRu: new FormControl(this.card.contextRu),
    });
  }
}
