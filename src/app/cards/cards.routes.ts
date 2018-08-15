import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardUpdateComponent } from './card-update/card-update.component';

const cardsRoutes: Routes = [
  { path: '', component: CardDisplayComponent },
  { path: 'card', component: CardUpdateComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(cardsRoutes);
