import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Film} from '../../models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {
  public films: Film[];
  public favorites: number[];

  constructor(
    private _filmService: FilmService
  ) {
  }

  ngOnInit() {
    this._filmService.loadFilms();
    this._filmService.getFilms().subscribe((data: Film[]) => {
      return this.films = data;
    });
    this._filmService.getFavorites().subscribe((data: number[]) => {
      console.log(data);
      return this.favorites = data;
    });
  }

  isFavorite(id: number) {
    return this.favorites.indexOf(id) !== -1;
  }
}
