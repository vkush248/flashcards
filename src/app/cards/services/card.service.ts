import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { Card } from '../models/card.model';


@Injectable()
export class CardService {
  cards: Card[];

  constructor(private _http: Http) { }

  renameProp_id(card) {
    const { _id, ...rest } = card;
    return { id: _id, ...rest };
  }

  getCards(): Observable<Card[]> {
    return this._http.get('/api/cards').pipe(
      map(cards => cards.json()),
      map(cards => [...cards].map(card => this.renameProp_id(card))),
    );
  }

  getCard(id): Observable<Card> {
    return this._http.get('/api/card/' + id).pipe(
      map(card => card.json()),
      tap(card => this.renameProp_id(card))
    );
  }

  updateCard(card: Card): Observable<Card> {
    this.cards = this.cards.map(elem => (elem.id === card.id) ? card : elem);
    return of(card);
  }

  addCard(card: Card): Observable<Card> {
    card = { ...card, id: this.generateId() };
    this.cards = [...this.cards, card];
    return of(card);
  }

  deleteCard(id: String) {
    this.cards = this.cards.filter(elem => elem.id !== id);
    return of(true);
  }

  generateId(): string {
    return uuid();
  }
}
