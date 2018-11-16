import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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
    (remove)="removeCard($event)">
  </app-card-edit>`,
})

export class CardEditContainerComponent {
  card$: Observable<Card>;
  id: string;

  constructor(
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromStore.CardsFeatureState>
  ) {
    this.card$ = this.route.paramMap.pipe(switchMap((params: ParamMap): any => {
      this.id = params.get('id');
      if (this.id !== 'new') {
        this.store.dispatch(new fromStore.LoadCard(this.id));
      }
      return this.store.select(fromStore.selectCard(this.id));
    }));
  }

  removeCard(id: string) {
    this.modalService.openDialog({
      width: '350px',
      data: {
        title: 'Removing',
        message: 'Are you sure you want to remove this card from your cards?',
        ok: 'Ok',
        cancel: 'Cancel',
      }
    }).subscribe((agree: boolean) => {
      if (agree) {
        this.store.dispatch(new fromStore.RemoveCard(id));
        this.router.navigate(['/cards']);
      }
    });
  }

  onUpdateCard(card: Card) {
    if (card._id) {
      of(this.store.dispatch(new fromStore.UpdateCard(card)))
        .subscribe(() => this.router.navigate(['/cards']));
    } else {
      of(this.store.dispatch(new fromStore.AddCard(card)))
        .subscribe(() => this.router.navigate(['/cards']));
    }
  }
}
