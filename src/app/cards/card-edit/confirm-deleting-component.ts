import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './card-edit.component';

@Component({
  selector: 'app-confirm-deleting',
  templateUrl: 'confirm-deleting-component.html',
})

export class ConfirmDeletingComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeletingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
