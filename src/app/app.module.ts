import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
/* import { CardDisplayComponent } from './card-display/card-display.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardUpdateComponent } from './card-update/card-update.component'; */
import { HeaderComponent } from './header/header.component';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    /*  CardDisplayComponent,
    CardItemComponent,
    CardUpdateComponent, */
    HeaderComponent
  ],
  imports: [BrowserModule, routing],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
