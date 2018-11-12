import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Card } from '../models/card.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-list-container',
  template: `<app-card-list [cards]="cards$ | async"></app-card-list>`,
})

export class CardListContainerComponent {
  cards$: Observable<Card[]>;

  constructor(
    private store: Store<fromStore.CardsFeatureState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    if (this.router.url === '/cards') {
      this.cards$ = of(this.store.dispatch(new fromStore.LoadCards())).pipe(
        switchMap((): Observable<Card[]> => this.store.pipe(select(fromStore.getAllCards)))
      );
    } else {
      this.cards$ = this.route.paramMap.pipe(
        map((params: ParamMap) => params.get('username')),
        switchMap((username: string): Observable<void> => {
          return of(this.store.dispatch(new fromStore.LoadUsersCards('tonymacaroni')));
        }),
        tap(() => {
          this.store.pipe(select(fromStore.getAllCards)).subscribe(console.log);
        }),
        switchMap((): Observable<Card[]> => this.store.pipe(select(fromStore.getAllCards)))
      );
    }
  }
}
