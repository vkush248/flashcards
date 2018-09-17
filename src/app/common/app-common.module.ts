import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
  ],
  declarations: [ModalComponent, SnackbarComponent]
})
export class AppCommonModule { }
