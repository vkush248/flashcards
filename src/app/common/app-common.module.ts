import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

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
    MatListModule
  ],
  declarations: [ModalComponent]
})
export class AppCommonModule { }
