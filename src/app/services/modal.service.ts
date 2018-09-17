import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { ModalComponent } from '../common/modal/modal.component';
import { SnackbarComponent } from '../common/snackbar/snackbar.component';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  dialogRef: MatDialogRef<any>;
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private store: Store<any>) { }

  openDialog(config): any {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = config.data;
    this.dialogRef = this.dialog.open(ModalComponent, config);
    return this.dialogRef.afterClosed();
  }

  openSnackbar(data) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3500,
      data
    }).afterDismissed().subscribe(() => this.store.dispatch(new fromStore.CloseSnackbar()));
  }
}
