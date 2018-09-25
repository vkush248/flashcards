import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { Snackbar } from '../../store';

@Component({
  selector: 'app-snackbar',
  template: `<div class="{{configuration.type}}">{{configuration.message}}</div>`,
  styles: [`
    div {
      text-align: center;
    }
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
  configuration: Snackbar;

  constructor(@Inject(MAT_SNACK_BAR_DATA) data, ) {
    this.configuration = data;
  }
}
