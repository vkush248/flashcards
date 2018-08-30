import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable()
export class CardService {
  cards: Card[] = [
    {
      id: 123,
      topic: 'Management',
      wordEn: 'a resource',
      exampleEn: 'untapped resources',
      contextEn: 'We lacked the resources to do the job properly.',
      img: 'https://image.flaticon.com/icons/png/512/113/113398.png',
      wordRu: 'Ресурс',
      exampleRu: 'Неиспользованные ресурсы',
      contextRu: 'Нам не хватало ресурсов, чтобы правильно выполнять работу.',
    },
    {
      id: 232,
      topic: 'Feelings',
      wordEn: 'to сrave',
      exampleEn: 'crave attention',
      contextEn: 'Humanity hungers for international peace, and we crave it with all mankind.',
      img: 'https://pbs.twimg.com/profile_images/823404913371684864/1wOnvWmw_400x400.jpg',
      wordRu: 'жаждать',
      exampleRu: 'жаждать внимания',
      contextRu: 'Человечество жаждет международного мира, и мы жаждем его со всем человечеством.',
    },
    {
      id: 323,
      topic: 'Adjectives',
      wordEn: 'inadmissible',
      exampleEn: 'inadmissible evidence',
      contextEn: 'This kind of speculation is permissible in cosmology but inadmissible in medicine.',
      img: 'http://chaudharylaw.com/wp-content/uploads/2016/08/do-not-sign-icon-png-0-300x300.png',
      wordRu: 'недопустимый',
      exampleRu: 'недопустимые доказательства',
      contextRu: 'Такие предположения допустимы в космологии, но недопустимы в медицине.',
    },
    {
      id: 487,
      topic: 'Adjectives',
      wordEn: 'preposterous',
      exampleEn: 'preposterous suggestion',
      contextEn: 'The preposterous wedding contract that the woman must love, honour and obey her husband is anachronistic.',
      img: 'https://cdn2.iconfinder.com/data/icons/truth-about-politics/64/donald_trump_mr_president_leader_boss_ceo_head-512.png',
      wordRu: 'абсурдный',
      exampleRu: 'нелепое предложение',
      contextRu: 'Нелепый свадебный контракт, согласно которому женщина должна любить, чтить и повиноваться мужу, является анахронизмом.',
    },
  ];

  constructor() { }

  getCards(): Observable<Card[]> {
    return of(this.cards);
  }

  getCard(id): Observable<Card> {
    const card: Card = this.cards.find(x => x.id === id);
    return of(card);
  }

  updateCard(card: Card): Observable<Card> {
    this.cards = this.cards.map(x => (x.id === card.id) ? card : x);
    return of(card);
  }

  addCard(card: Card): Observable<Card> {
    this.cards.push(card);
    return of(card);
  }

  deleteCard(card: Card): Observable<Card> {
    this.cards = this.cards.filter(x => x.id !== card.id);
    return of(card);
  }

  generateDefaultCard(): Observable<Card> {
    return of({
      id: 999,
      topic: 'Your topic',
      wordEn: 'Default',
      exampleEn: 'Default',
      contextEn: 'Default',
      img: 'https://via.placeholder.com/100x100',
      wordRu: 'Default',
      exampleRu: 'Default',
      contextRu: 'Default',
    });
  }
}
