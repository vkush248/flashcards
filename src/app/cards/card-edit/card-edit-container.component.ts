import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModalService } from '../../services/modal.service';
import * as fromStore from '../../store';
import { Card } from '../models/card.model';
import * as fromCards from '../store';

@Component({
  selector: 'app-card-edit-container',
  template: `
  <app-card-edit
    [card]="card$ | async"
    (save)="onUpdateCard($event)"
    (remove)="removeCard($event)">
  </app-card-edit>`,
})

export class CardEditContainerComponent {
  card$: Observable<Card>;
  id: string;

  constructor(
    public modalService: ModalService,
    private route: ActivatedRoute,
    private store: Store<fromCards.CardsFeatureState>
  ) {
    this.card$ = this.route.paramMap.pipe(switchMap((params: ParamMap): any => {
      this.id = params.get('id');
      if (this.id !== 'new') {
        this.store.dispatch(new fromCards.LoadCard(this.id));
      }
      return this.store.select(fromCards.selectCard(this.id));
    }));
  }

  removeCard(id: string) {
    this.store.dispatch(new fromStore.OpenDialog({
      config: {
        width: '350px',
        data: {
          title: 'Removing',
          message: 'Are you sure you want to remove this card from your cards?',
          ok: 'Ok',
          cancel: 'Cancel',
        }
      },
      action: {
        name: 'RemoveCard',
        payload: this.id
      }
    }));
  }

  onUpdateCard(card: Card) {
    if (card._id) {
      this.store.dispatch(new fromCards.UpdateCard(card));
    } else {
      this.store.dispatch(new fromCards.AddCard(card));
    }
  }
}
