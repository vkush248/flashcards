import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  declarations: [ModalComponent]
})
export class AppCommonModule { }
