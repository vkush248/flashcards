import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Card } from '../models/card.model';

@Injectable()
export class CardService {
  cards: Card[] = [
    {
      id: '123',
      topic: 'Management',
      word: 'a resource',
      example: 'untapped resources',
      context: 'We lacked the resources to do the job properly.',
      img: 'https://image.flaticon.com/icons/png/512/113/113398.png',
      translation: 'Ресурс',
      exampleTranslation: 'Неиспользованные ресурсы',
      contextTranslation: 'Нам не хватало ресурсов, чтобы правильно выполнять работу.',
    },
    {
      id: '232',
      topic: 'Feelings',
      word: 'to сrave',
      example: 'crave attention',
      context: 'Humanity hungers for international peace, and we crave it with all mankind.',
      img: 'https://pbs.twimg.com/profile_images/823404913371684864/1wOnvWmw_400x400.jpg',
      translation: 'жаждать',
      exampleTranslation: 'жаждать внимания',
      contextTranslation: 'Человечество жаждет международного мира, и мы жаждем его со всем человечеством.',
    },
    {
      id: '323',
      topic: 'Adjectives',
      word: 'inadmissible',
      example: 'inadmissible evidence',
      context: 'This kind of speculation is permissible in cosmology but inadmissible in medicine.',
      img: 'http://chaudharylaw.com/wp-content/uploads/2016/08/do-not-sign-icon-png-0-300x300.png',
      translation: 'недопустимый',
      exampleTranslation: 'недопустимые доказательства',
      contextTranslation: 'Такие предположения допустимы в космологии, но недопустимы в медицине.',
    },
    {
      id: '487',
      topic: 'Adjectives',
      word: 'preposterous',
      example: 'preposterous suggestion',
      context: 'The preposterous wedding contract that the woman must love, honour and obey her husband is anachronistic.',
      img: 'https://cdn2.iconfinder.com/data/icons/truth-about-politics/64/donald_trump_mr_president_leader_boss_ceo_head-512.png',
      translation: 'абсурдный',
      exampleTranslation: 'нелепое предложение',
      contextTranslation:
        'Нелепый свадебный контракт, согласно которому женщина должна любить, чтить и повиноваться мужу, является анахронизмом.',
    },
  ];

  constructor() { }

  getCards(): Observable<Card[]> {
    return of(this.cards);
  }

  getCard(id): Observable<Card> {
    const card: Card = this.cards.find(elem => elem.id === id);
    return of(card);
  }

  updateCard(card: Card): Observable<Card> {
    if (Math.random() > 0.5) {
      return throwError('Something went wrong. Try again!');
    } else {
      this.cards = this.cards.map(elem => (elem.id === card.id) ? card : elem);
      return of(card);
    }
  }

  addCard(card: Card): Observable<Card> {
    if (Math.random() > 0.5) {
      return throwError('Something went wrong. Try again!');
    } else {
      card = { ...card, id: this.generateId() };
      this.cards = [...this.cards, card];
      return of(card);
    }
  }

  deleteCard(id: String) {
    if (Math.random() > 0.5) {
      return throwError('Something went wrong. Try again!');
    } else {
      this.cards = this.cards.filter(elem => elem.id !== id);
      return of(true);
    }
  }

  generateId(): string {
    return uuid();
  }
}
