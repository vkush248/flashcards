import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CardEditContainerComponent } from './card-edit/card-edit-container.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { ConfirmDeletingComponent } from './card-edit/confirm-deleting-component';
import { CardListContainerComponent } from './card-list/card-list-container.component';
import { CardListComponent } from './card-list/card-list.component';
import { routing } from './cards.routes';
import { CardService } from './services/card.service';
import { effects, reducers } from './store';
@NgModule({
  imports: [
    routing,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    StoreModule.forFeature('cardsStore', reducers.cards),
    EffectsModule.forFeature(effects),
  ],
  providers: [CardService],
  entryComponents: [ConfirmDeletingComponent],
  declarations: [
    CardListComponent,
    CardListContainerComponent,
    CardEditComponent,
    CardEditContainerComponent,
    ConfirmDeletingComponent
  ],
})
export class CardsModule { }
