import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
