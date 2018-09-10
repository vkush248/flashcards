import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  template: `<div>{{configuration.message}}</div>`,
})
export class SnackbarComponent {
  configuration: {
    message: String,
  };

  constructor(@Inject(MAT_SNACK_BAR_DATA) data, ) {
    this.configuration = data;
  }
}
