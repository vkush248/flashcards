import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';
import * as fromStore from '../../store';
import { Card } from '../models/card.model';
import * as fromCards from '../store';

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
    private store: Store<fromCards.CardsFeatureState>,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService,
  ) {
    if (this.router.url === '/cards') {
      this.store.dispatch(new fromCards.LoadCards());
      this.cards$ = this.store.select(fromCards.getAllCards);
    } else {
      this.cards$ = this.store.select(fromStore.getUsername).pipe(
        map(username => this.store.dispatch(new fromCards.LoadUsersCards(username))),
        switchMap(() => this.store.select(fromCards.getAllCards)),
      );
    }
  }

  addCard(id: string) {
    this.store.dispatch(new fromCards.AddCardToUsers(id));
  }
  removeCard(id: string) {
    this.store.dispatch(new fromCards.RemoveCard(id));
  }

}
