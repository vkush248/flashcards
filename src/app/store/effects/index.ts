import { DialogEffects } from './dialog.effects';
import { RouterEffects } from './router.effects';
import { SnackbarsEffects } from './snackbar.effects';
import { UsersEffects } from './users.effects';

export const effects: any[] = [UsersEffects, SnackbarsEffects, DialogEffects, RouterEffects];

export * from './dialog.effects';
export * from './router.effects';
export * from './snackbar.effects';
export * from './users.effects';

