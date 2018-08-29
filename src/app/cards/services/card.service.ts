import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable()
export class CardService {
  constructor() { }

  getCards(): Observable<Card[]> {
    return of([
      {
        id: 1,
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
        id: 2,
        topic: 'Feelings',

        wordEn: 'to сrave',
        exampleEn: 'crave attention',
        contextEn:
          'Humanity hungers for international peace, and we crave it with all mankind.',
        img:
          'https://pbs.twimg.com/profile_images/823404913371684864/1wOnvWmw_400x400.jpg',

        wordRu: 'жаждать',
        exampleRu: 'жаждать внимания',
        contextRu:
          'Человечество жаждет международного мира, и мы жаждем его со всем человечеством.',
      },
      {
        id: 3,
        topic: 'Adjectives',

        wordEn: 'inadmissible',
        exampleEn: 'inadmissible evidence',
        contextEn:
          'This kind of speculation is permissible in cosmology but inadmissible in medicine.',
        img:
          'http://chaudharylaw.com/wp-content/uploads/2016/08/do-not-sign-icon-png-0-300x300.png',

        wordRu: 'недопустимый',
        exampleRu: 'недопустимые доказательства',
        contextRu:
          'Такие предположения допустимы в космологии, но недопустимы в медицине.',
      },
      {
        id: 4,
        topic: 'Adjectives',

        wordEn: 'preposterous',
        exampleEn: 'preposterous suggestion',
        contextEn:
          'The preposterous wedding contract that the woman must love, honour and obey her husband is anachronistic.',
        img:
          'https://cdn2.iconfinder.com/data/icons/truth-about-politics/64/donald_trump_mr_president_leader_boss_ceo_head-512.png',

        wordRu: 'абсурдный',
        exampleRu: 'нелепое предложение',
        contextRu:
          'Нелепый свадебный контракт, согласно которому женщина должна любить, чтить и повиноваться мужу, является анахронизмом.',
      },
    ]);
  }
  updateCard(card: Card): Observable<Card> {
    return of(card);
  }
  addCard(card: Card): Observable<Card> {
    return of(card);
  }
  deleteCard(card: Card): Observable<Card> {
    return of(card);
  }
  generateDefaultCard(): Observable<Card> {
    return of({
      id: 564546,
      topic: 'Default',

      wordEn: 'Default',
      exampleEn: 'Default',
      contextEn:
        'Default',
      img:
        'https://via.placeholder.com/100x100',

      wordRu: 'Default',
      exampleRu: 'Default',
      contextRu:
        'Default',
    });
  }
}
