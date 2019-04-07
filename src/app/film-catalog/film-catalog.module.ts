import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FilmsComponent } from './components/films/films.component';
import { DetailsComponent } from './components/details/details.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmOrderComponent } from './components/film-order/film-order.component';
import {DateFormatPipe} from '../utils/pipes/date-format.pipe';

@NgModule({
  declarations: [MainComponent, FilmsComponent, DetailsComponent, FilmCardComponent, FilmOrderComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class FilmCatalogModule { }
