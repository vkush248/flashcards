import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';
import { Card } from '../models/card.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-list-container',
  template: `<app-card-list
  [cards]="cards$ | async"
  (add)="addCard($event)"
  (remove)="removeCard($event)"></app-card-list>`,
})

export class CardListContainerComponent {
  cards$: Observable<Card[]>;

  constructor(
    private store: Store<fromStore.CardsFeatureState>,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService,
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
        switchMap((): Observable<Card[]> => this.store.select(fromStore.getAllCards))
      );
    }
  }

  addCard(id: string) {
    this.store.dispatch(new fromStore.AddCardToUsers(id));
  }
  removeCard(id: string) {
    this.store.dispatch(new fromStore.RemoveCard(id));
  }

}
