import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEditContainerComponent } from './card-edit/card-edit-container.component';
import { CardListContainerComponent } from './card-list/card-list-container.component';

const cardsRoutes: Routes = [
  { path: '', component: CardListContainerComponent },
  { path: ':id', component: CardEditContainerComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(cardsRoutes);
