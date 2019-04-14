import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import {Film} from '../film-catalog/models/Film';
import {FilmApiService} from '../api/film/film-api.service';
import {AddFavorite, DelFavorite, LoadFilms, SetOrder} from './actions/films';
import {FilmSearch} from '../film-catalog/models/FilmSearch';

@Injectable({
  providedIn: 'root'
})
export class FilmStoreService {

  constructor(
    private _filmApi: FilmApiService,
    private _store: Store<fromRoot.State>
  ) { }

  preloadFilms(term: string = '', sortBy: string = '', include_adult: boolean = false, year: string = '') {
    return this._filmApi.searchMovies(term, sortBy, include_adult, year);
  }
  loadFilms(term: string = '', sortBy: string = '', include_adult: boolean = false, year: string = '') {
    this.preloadFilms(term, sortBy, include_adult, year).subscribe( (films: FilmSearch) => {
      const resultFilms: Array<Film> = [];
      if (films.results) {
        let tmp: Film = null;
        films.results.forEach(function (value) {
          tmp = new Film().deserialize(value);
          tmp.poster_path = FilmApiService.IMAGE_URL.concat(tmp.poster_path);
          tmp.backdrop_path = FilmApiService.IMAGE_URL.concat(tmp.backdrop_path);
          resultFilms.push(tmp);
        });
      }
      this._store.dispatch(new LoadFilms(resultFilms));
    });
  }
  checkFavorite(film: Film) {
    this._store.dispatch(new AddFavorite(film));
  }
  uncheckFavorite(film: Film) {
    this._store.dispatch(new DelFavorite(film));
  }
  getFilms() {
    return this._store.select(fromRoot.getFilms);
  }
  getFavorites() {
    return this._store.select(fromRoot.getFavorites);
  }
  getOrder() {
    return this._store.select(fromRoot.getOrder);
  }
  setOrder(order: string) {
    return this._store.dispatch(new SetOrder(order));
  }
}
