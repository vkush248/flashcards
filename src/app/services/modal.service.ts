import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalComponent } from '../common/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialogRef: any;
  constructor(public dialog: MatDialog) { }

  openDialog(config): any {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = config.data;
    this.dialogRef = this.dialog.open(ModalComponent, config);
    return this.dialogRef.afterClosed();
  }
}
