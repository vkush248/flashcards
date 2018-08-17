import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardListComponent } from './card-list/card-list.component';

const cardsRoutes: Routes = [
  { path: '', component: CardListComponent },

  {
    path: ':id',
    component: CardEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(cardsRoutes);
