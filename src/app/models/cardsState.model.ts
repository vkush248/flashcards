import { Card } from './card.model';

export interface CardsState {
  data: Card[];
  loaded: boolean;
  loading: boolean;
}
