import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { cardsReducer } from './store/cards.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    routing,
    StoreModule.forRoot({ cardsStore: cardsReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
