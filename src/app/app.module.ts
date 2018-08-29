import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
