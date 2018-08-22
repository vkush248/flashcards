import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListContainerComponent } from './card-list/card-list-container.component';
import { CardListComponent } from './card-list/card-list.component';
import { routing } from './cards.routes';
import { CardService } from './services/card.service';
import { effects, reducers } from './store';

@NgModule({
  imports: [
    routing,
    CommonModule,
    StoreModule.forFeature('cardsStore', reducers.cards),
    EffectsModule.forFeature(effects),
  ],
  providers: [CardService],

  declarations: [
    CardListComponent,
    CardItemComponent,
    CardEditComponent,
    CardListContainerComponent,
  ],
})
export class CardsModule {}
