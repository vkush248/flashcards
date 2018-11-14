import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';

@Injectable()
export class CardService {
  cards: Card[];

  constructor(private _http: Http) { }

  getCards(): Observable<Card[]> {
    return this._http.get('/api/cards/').pipe(
      map(cards => cards.json()),
    );
  }

  getUsersCards(username): Observable<Card[]> {
    return this._http.get('/api/cards/' + username).pipe(
      map(cards => cards.json()),
    );
  }

  getCard(id): Observable<Card> {
    return this._http.get('/api/cards/' + id).pipe(
      map(card => card.json())
    );
  }

  updateCard(card: Card): any {
    return this._http.put('/api/cards/update/' + card._id, card).pipe(
      map(result => result.json()),
    );
  }

  addCard(card: Card): Observable<Card> {
    return this._http.post('api/cards/new', card).pipe(
      map(result => result.json()),
    );
  }

  deleteCard(id: String) {
    return this._http.delete('/api/cards/delete/' + id);
  }

  deleteUsersCard(id: String): Observable<boolean> {
    return this._http.put('/api/cards/remove/' + id, id).pipe(
      pluck('ok')
    );
  }

  addCardToUsers(id: String): Observable<boolean> {
    return this._http.put('/api/cards/add/' + id, id).pipe(
      pluck('ok')
    );
  }

}
