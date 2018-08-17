import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardListComponent } from './card-list/card-list.component';
import { routing } from './cards.routes';
import { CardService } from './services/card.service';

@NgModule({
  imports: [routing, CommonModule],
  providers: [CardService],
  declarations: [CardListComponent, CardItemComponent, CardEditComponent]
})
export class CardsModule {}
