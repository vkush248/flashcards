import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getSnackbarState = createFeatureSelector<AppState>('snackbar');

export const getSnackbarMessage = createSelector(getSnackbarState, (snackbar: any) => snackbar.message);
