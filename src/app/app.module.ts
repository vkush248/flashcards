import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardItemComponent } from './card-item/card-item.component';
import { StoreModule } from '@ngrx/store';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [AppComponent, CardDisplayComponent, CardItemComponent],
  imports: [
    BrowserModule
    // StoreModule.p
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
