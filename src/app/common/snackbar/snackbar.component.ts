import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { SnackbarState } from '../../store';

@Component({
  selector: 'app-snackbar',
  template: `<div class="{{configuration.type}}">{{configuration.message}}</div>`,
  styles: [`
    .info {
      color: lightskyblue;
    }
    .warn {
      color: lightcoral;
    }
    .success {
      color: chartreuse;
    }
    .danger {
      color: red;
    }
  `]
})

export class SnackbarComponent {
  configuration: SnackbarState;

  constructor(@Inject(MAT_SNACK_BAR_DATA) data, ) {
    this.configuration = data;
  }
}
