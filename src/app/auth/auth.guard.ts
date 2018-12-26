import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<any>, actions$: Actions) {
    console.log('constructor');
    // add loaded and loading properties to the store and then just filter if it's loaded
    // actions$.ofType(CHECK_IF_LOGGED_IN_SUCCESS).subscribe((action: any) => {
    //   console.log(action.payload.isLoggedIn);
    //   this.isLoggedIn$ = action.payload.isLoggedIn;
    // });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    console.log('canActivate');
    return this.isLoggedIn();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

  isLoggedIn(): Observable<boolean> {
    return merge(this.isLoggedInTrue(), this.isLoggedInFalse()).pipe(
      tap(x => console.log(x)),
    );
  }

  isLoggedInTrue(): Observable<boolean> {
    return this.store.select(fromStore.getIsLoggedIn).pipe(
      filter(x => x === true),
      tap(x => console.log('checkedIsLoggedInInStoreTrue', x)),
    );
  }

  isLoggedInFalse(): Observable<boolean> {
    return this.store.select(fromStore.getIsLoggedIn).pipe(
      filter(x => x === false),
      tap(x => this.store.dispatch(new fromStore.CheckIfLoggedIn)),
      tap(x => console.log('checkedIsLoggedInInStoreFalse2', x)),
    );
  }
}
