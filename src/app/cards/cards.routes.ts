import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardUpdateComponent } from './card-update/card-update.component';

const cardsRoutes: Routes = [
  { path: '', component: CardDisplayComponent },
  { path: 'card', component: CardUpdateComponent },
  {
    path: 'card-details/:id',
    component: CardDetailsComponent /* ,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: 'OverviewComponent' },
      { path: 'update', component: 'UpdateComponent' }
    ] */
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(cardsRoutes);
