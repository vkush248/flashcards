import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
