import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment'; // Angular CLI environemnt
import { effects, reducers } from '../store';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListContainerComponent } from './card-list/card-list-container.component';
import { CardListComponent } from './card-list/card-list.component';
import { routing } from './cards.routes';
import { CardService } from './services/card.service';

@NgModule({
  imports: [
    routing,
    CommonModule,
    StoreModule.forRoot({ cardsStore: reducers.cards }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [CardService],

  declarations: [
    CardListComponent,
    CardItemComponent,
    CardEditComponent,
    CardListContainerComponent
  ]
})
export class CardsModule {}
