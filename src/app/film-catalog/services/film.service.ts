import { Injectable } from '@angular/core';
import {FilmStoreService} from '../../store/film-store.service';
import {Film} from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(
    private _filmStore: FilmStoreService
  ) { }
  getFilms() {
    return this._filmStore.getFilms();
  }
  getFavorites() {
    return this._filmStore.getFavorites();
  }
  loadFilms(term: string = '', include_adult: boolean = false, year: string = '') {
    return this._filmStore.loadFilms(term, include_adult, year);
  }
  checkFavorite(film: Film) {
    return this._filmStore.checkFavorite(film);
  }
  uncheckFavorite(film: Film) {
    return this._filmStore.uncheckFavorite(film);
  }
}
