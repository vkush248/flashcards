import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, map, switchMap } from 'rxjs/operators';
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
  openDialog$ = this.actions$.pipe(ofType(dialogActions.OPEN_DIALOG)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => this.modalService.openDialog(payload.config).pipe(
      map(agree => {
        if (agree) {
          const actionName = payload.action.name;
          const actionPayload = payload.action.payload;
          return new cardsActions[actionName](actionPayload);
        }
      }),
    )),
  );

  @Effect()
  closeDialog$ = this.actions$.pipe(ofType(
    dialogActions.OPEN_DIALOG,
  )).pipe(
    delay(5000),
    map(() => new dialogActions.CloseDialog());
  )


}
