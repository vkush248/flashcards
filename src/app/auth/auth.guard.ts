import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, merge, tap } from 'rxjs/operators';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<any>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): Observable<boolean> {
    const isLoggedIn$ = this.checkLoginInStore().pipe(
      filter((isLoggedIn: boolean) => isLoggedIn),
    );
    const isNotLoggedIn$ = this.checkLoginInStore().pipe(
      filter((isLoggedIn: boolean) => !isLoggedIn),
      tap(() => this.store.dispatch(new fromStore.CheckIfLoggedIn())),
    );
    return isLoggedIn$.pipe(merge(isNotLoggedIn$));
  }

  checkLoginInStore() {
    return this.store.select(fromStore.getIsLoggedIn);
  }
}
