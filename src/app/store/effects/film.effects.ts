import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FILM_ACTION, LoadFilms, SetOrder} from '../actions/films';
import {mergeMap, switchMap} from 'rxjs/operators';
import {FilmStoreService} from '../film-store.service';
import {Film} from '../../film-catalog/models/Film';
import {FilmSearch} from '../../film-catalog/models/FilmSearch';

@Injectable()
export class FilmEffects {
  constructor (
    private actions$: Actions,
    private _filmStoreService: FilmStoreService,
  ) {}
  @Effect() loadFilms = this.actions$.pipe(
    ofType(FILM_ACTION.LOAD_FILMS),
    switchMap( (action: LoadFilms) => {
      return this._filmStoreService.preloadFilms();
    }),
    mergeMap( (search: FilmSearch) => {
      return [
        {
          type: FILM_ACTION.GET_FILMS,
          payload: search.results
        }
      ];
    })
  );
  @Effect() getFilms = this.actions$.pipe(
    ofType(FILM_ACTION.SET_ORDER),
    switchMap( (action: SetOrder) => {
      return this._filmStoreService.getFilms();
    }),
    mergeMap( (films: Film[]) => {
      return [
        {
          type: FILM_ACTION.GET_FILMS,
          payload: films
        }
      ];
    })
  );
}
