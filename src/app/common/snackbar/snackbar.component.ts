import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  template: `<div class="{{configuration.class}}">{{configuration.message}}</div>`,
  styles: [`
    .primary {
        color: lightskyblue;
    }
    .warn {
        color: lightcoral;
    }
    .success {
        color: chartreuse;
    }
  `]
})
export class SnackbarComponent {
  configuration: {
    message: String,
    class: String,
  };

  constructor(@Inject(MAT_SNACK_BAR_DATA) data, ) {
    this.configuration = data;
  }
}
