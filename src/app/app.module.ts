import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardItemComponent } from './card-item/card-item.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CardDisplayComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.p
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
