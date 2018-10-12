import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full', canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule', canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
