import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilmCatalogModule} from './film-catalog/film-catalog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DateFormatPipe } from './utils/pipes/date-format.pipe';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers} from './store/reducers';
import {FilmInterceptorService} from './api/film/film-interceptor.service';
import {FilmApiService} from './api/film/film-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilmCatalogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    StoreRouterConnectingModule,
    (environment.production ? [] : StoreDevtoolsModule.instrument()),
    StoreModule.forRoot(reducers),
  ],
  providers: [
    FilmApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FilmInterceptorService,
      multi: true
    }
  ],
  exports: [
    DateFormatPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
