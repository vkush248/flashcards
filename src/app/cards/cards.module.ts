import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardService } from '../services/card.service';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardUpdateComponent } from './card-update/card-update.component';
import { routing } from './cards.routes';

@NgModule({
  imports: [routing, CommonModule],
  providers: [CardService],
  declarations: [CardDisplayComponent, CardUpdateComponent, CardItemComponent]
})
export class CardsModule {}
