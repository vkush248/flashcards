import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';

@Injectable()
export class CardService {
  cards: Card[];

  constructor(private _http: HttpClient) { }

  getCards(): Observable<any> {
    return this._http.get('/api/cards/');
  }

  getUsersCards(username): Observable<any> {
    return this._http.get('/api/cards/' + username);
  }

  getCard(id): Observable<any> {
    return this._http.get('/api/cards/card/' + id);
  }

  updateCard(card: Card): any {
    return this._http.put('/api/cards/update/' + card._id, card);
  }

  addCard(card: Card): Observable<any> {
    return this._http.post('api/cards/new', card);
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
