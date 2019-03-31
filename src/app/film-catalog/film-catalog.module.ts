import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FilmsComponent } from './components/films/films.component';
import { DetailsComponent } from './components/details/details.component';
import {MatCardModule, MatTabsModule} from '@angular/material';
import { FilmCardComponent } from './components/film-card/film-card.component';

@NgModule({
  declarations: [MainComponent, FilmsComponent, DetailsComponent, FilmCardComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
  ]
})
export class FilmCatalogModule { }
