import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardListContainerComponent } from './card-list/card-list-container.component';
import { CardListComponent } from './card-list/card-list.component';
import { routing } from './cards.routes';
import { CardService } from './services/card.service';
import { effects, reducers } from './store';

@NgModule({
  imports: [
    routing,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('cardsStore', reducers.cards),
    EffectsModule.forFeature(effects),
  ],
  providers: [CardService],

  declarations: [
    CardListComponent,
    CardEditComponent,
    CardListContainerComponent,
  ],
})
export class CardsModule {}
