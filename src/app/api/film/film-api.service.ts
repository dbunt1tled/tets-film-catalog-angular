import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FilmSearch} from '../../film-catalog/models/FilmSearch';
import {FilmSearchMulti} from '../../film-catalog/models/FilmSearchMulti';

@Injectable({
  providedIn: 'root'
})
export class FilmApiService {
  static BASE_URL = environment.filmApiBaseUrl;
  static readonly IMAGE_URL = environment.filmApiImgUrl;
  public lang = environment.filmApiLanguage;
  constructor(
    private _http: HttpClient
  ) { }
  public searchMovies(term: string = '', include_adult: boolean = false, year: string = ''): Observable<FilmSearch> {
    if (term === '') {
      return this.popularMovies();
    }
    const params = new HttpParams()
      .set('query', term)
      .set('language', this.lang)
      .set('include_adult', include_adult.toString())
    ;
    if (year) {
      params.set('year', year);
    }
    return this._http.get<FilmSearch>(`${FilmApiService.BASE_URL}/search/movie`, {params});
  }
  public searchMoviesMulti(term: string = ''): Observable<FilmSearchMulti> {
    const params = new HttpParams()
      .set('language', this.lang)
      .set('query', term)
    ;
    return this._http.get<FilmSearchMulti>(`${FilmApiService.BASE_URL}/search/multi`, {params});
  }
  public popularMovies(): Observable<FilmSearch> {
    const params = new HttpParams()
      .set('language', this.lang)
      .set('sort_by', 'popularity.desc')
    ;
    return this._http.get<FilmSearch>(`${FilmApiService.BASE_URL}/discover/movie`, {params});
  }
}
