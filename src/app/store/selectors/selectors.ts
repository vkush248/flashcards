import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getSnackbarState = createFeatureSelector<AppState>('snackbar');

export const getUsernameState = createFeatureSelector<AppState>('username');

export const getSnackbarMessage = createSelector(getSnackbarState, (snackbar: any) => snackbar.message);
