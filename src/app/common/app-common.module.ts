import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
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
    ModalComponent,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ClickStopPropagationDirective,
  ],
  declarations: [ModalComponent, SnackbarComponent, ClickStopPropagationDirective]
})
export class AppCommonModule { }
