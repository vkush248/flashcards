import { RouterModule, Routes } from '@angular/router';
import { CardDisplayComponent } from '../card-display/card-display.component';
import { CardUpdateComponent } from '../card-update/card-update.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', component: CardDisplayComponent },
  { path: 'card', component: CardUpdateComponent },
  { path: 'card-details/:id', component: CardUpdateComponent },
  { path: 'card-update', component: CardUpdateComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
