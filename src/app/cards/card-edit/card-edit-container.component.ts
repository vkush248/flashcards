import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModalService } from '../../services/modal.service';
import { Card } from '../models/card.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-card-edit-container',
  template: `
  <app-card-edit
    [card]="card$ | async"
    (save)="onUpdateCard($event)"
    (delete)="deleteCard()">
  </app-card-edit>`,
  styles: [],
})

export class CardEditContainerComponent {
  card$: Observable<Card>;
  id: string;

  constructor(
    public modalService: ModalService,
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>
  ) {
    this.card$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      this.id = params.get('id');
      return this.store.select(fromStore.selectCard(this.id));
      /* state => state.cardsStore.cards.find(card => card.id === this.id)) */
    }));
    this.card$.subscribe(x => console.log(x, this.id));

  }

  deleteCard(id: string) {
    this.modalService.openDialog({
      width: '350px',
      data: {
        title: 'Deleting',
        message: 'Are you sure you want to delete this card?',
        ok: 'Ok',
        cancel: 'Cancel',
      }
    }).subscribe((agree: boolean) => {
      if (agree) {
        this.store.dispatch(new fromStore.DeleteCard(this.id));
      }
    });
  }

  onUpdateCard(card: Card) {
    if (this.id === 'new') {
      this.store.dispatch(new fromStore.AddCard(card));
    } else {
      this.store.dispatch(new fromStore.UpdateCard(card));
    }
  }
}
