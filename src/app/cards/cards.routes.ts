import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardListContainerComponent } from './card-list/card-list-container.component';

const cardsRoutes: Routes = [
  { path: '', component: CardListContainerComponent },
  { path: ':id', component: CardEditComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(cardsRoutes);
