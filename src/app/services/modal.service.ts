import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { ModalComponent } from '../common/modal/modal.component';
import { SnackbarComponent } from '../common/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialogRef: any;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  openDialog(config): any {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = config.data;
    this.dialogRef = this.dialog.open(ModalComponent, config);
    return this.dialogRef.afterClosed();
  }

  openSnackbar(data) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1500,
      data
    });
  }
}
