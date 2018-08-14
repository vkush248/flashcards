import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardUpdateComponent } from './card-update/card-update.component';
import { routing } from './routes/app.routes';
import { CardService } from './services/card.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDisplayComponent,
    CardItemComponent,
    CardUpdateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing
    // StoreModule.p
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
