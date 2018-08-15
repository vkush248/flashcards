import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardService } from '../services/card.service';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardUpdateComponent } from './card-update/card-update.component';
import { routing } from './cards.routes';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  imports: [routing, CommonModule],
  providers: [CardService],
  declarations: [CardDisplayComponent, CardUpdateComponent, CardItemComponent, CardDetailsComponent]
})
export class CardsModule {}
