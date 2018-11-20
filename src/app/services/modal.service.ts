import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { ModalComponent } from '../common/modal/modal.component';
import { SnackbarComponent } from '../common/snackbar/snackbar.component';
// import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialogRef: MatDialogRef<any>;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
  ) { }

  openDialog(config): any {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = config.data;
    return this.dialog.open(ModalComponent, config);
  }

  openSnackbar(data) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3500,
      data
    });
  }
}
