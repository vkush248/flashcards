import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this._http.post('api/cards/new', JSON.stringify(card), options).pipe(
      map(result => result.json()),
    );
  }

  deleteCard(id: String) {
    return this._http.delete('/api/cards/delete/' + id);
  }

}
