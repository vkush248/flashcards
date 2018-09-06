import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppCommonModule } from '../common/app-common.module';
import { CardEditContainerComponent } from './card-edit/card-edit-container.component';
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
    AppCommonModule,
    StoreModule.forFeature('cardsStore', reducers.cards),
    EffectsModule.forFeature(effects),
  ],
  providers: [CardService],
  declarations: [
    CardListComponent,
    CardListContainerComponent,
    CardEditComponent,
    CardEditContainerComponent,
  ],
})

export class CardsModule { }
