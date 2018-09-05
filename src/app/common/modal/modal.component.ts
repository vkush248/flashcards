import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  template: `
  <h2 mat-dialog-title> {{configuration.title}}</h2>
  <div mat-dialog-content>
    <p>{{configuration.message}}</p>
  </div>
  <div mat-dialog-actions>
  <button mat-button (click)="closeDialog(false)">{{configuration.cancel}}</button>
  <button mat-button (click)="closeDialog(true)">{{configuration.ok}}</button>
  </div>
`,
  styles: [],
})
export class ModalComponent {
  configuration: {
    title: string,
    message: string,
    ok: string,
    cancel: string;
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<ModalComponent>
  ) {
    this.configuration = data;
  }

  closeDialog(result) {
    this.dialogRef.close(result);
  }
}
