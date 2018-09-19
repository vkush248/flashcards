import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSnackbars from '../reducers';

export const getSnackbarState = createFeatureSelector<fromSnackbars.AppState>('snackbar');

export const getSnackbarMessage = createSelector(getSnackbarState, (snackbar: any) => snackbar.message);
