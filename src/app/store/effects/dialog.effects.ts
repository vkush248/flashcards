import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { combineLatest, of } from 'rxjs';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
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
      return combineLatest([this.modalService.openDialog(payload.config).afterClosed(), of(payload)]);
    }),
    switchMap(([agree, payload]): any => {
      if (agree) {
        const actionName = payload.action.name;
        const actionPayload = payload.action.payload;
        return [
          new cardsActions[actionName](actionPayload),
          new dialogActions.CloseDialog()
        ];
      }
      return new dialogActions.CloseDialog();
    }),
  );
}
