import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppCommonModule } from './common/app-common.module';
import { ModalComponent } from './common/modal/modal.component';
import { SnackbarComponent } from './common/snackbar/snackbar.component';
import { HeaderComponent } from './header/header.component';
import { effects, reducers } from './store';
import { CustomSerializer } from './store/reducers/router.reducer';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AppCommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  exports: [],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  entryComponents: [ModalComponent, SnackbarComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }
