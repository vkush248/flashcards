import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const getSnackbarState = createFeatureSelector<AppState>('snackbar');

export const getSnackbarMessage = createSelector(getSnackbarState, (snackbar: any) => snackbar.message);

export const getUserState = createFeatureSelector<AppState>('user');

export const getUsername = createSelector(getUserState, (user: any) => user.username);

export const getIsLoggedIn = createSelector(getUserState, (user: any) => user.isLoggedIn);
