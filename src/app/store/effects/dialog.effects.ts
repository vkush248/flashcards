import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';
import * as cardsActions from '../../cards/store/actions';
import * as dialogActions from '../actions/dialog.actions';

@Injectable()
export class DialogEffects {
  constructor(
    private actions$: Actions,
    private modalService: ModalService,
  ) { }

  @Effect()
  openDialog$ = this.actions$.pipe(
    ofType(dialogActions.OPEN_DIALOG),
    map((action: any) => action.payload),
    exhaustMap((payload: any) => {
      return this.modalService.openDialog(payload.config).afterClosed().pipe(
        map(agree => {
          if (agree) {
            const actionName = payload.action.name;
            const actionPayload = payload.action.payload;
            return new cardsActions[actionName](actionPayload);
          } else {
            return new dialogActions.CloseDialog();
          }
        }),
      );
    })
  );
}
