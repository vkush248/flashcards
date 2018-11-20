import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ModalService } from './services/modal.service';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(actions$: Actions, private modalService: ModalService, private store: Store<fromStore.AppState>) {
    actions$.pipe(
      ofType(fromStore.SELECT_SNACKBAR),
      map((action: any) => action.payload),
      map(message => this.modalService.openSnackbar(message)),
    ).subscribe();
  }
}
