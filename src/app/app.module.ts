import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
