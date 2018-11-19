import { DialogEffects } from './dialog.effects';
import { SnackbarsEffects } from './snackbar.effects';
import { UsersEffects } from './users.effects';

export const effects: any[] = [UsersEffects, SnackbarsEffects, DialogEffects];

export * from './dialog.effects';
export * from './snackbar.effects';
export * from './users.effects';
