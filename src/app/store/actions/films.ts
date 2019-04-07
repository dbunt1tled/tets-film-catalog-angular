import { Action } from '@ngrx/store';
import {Film} from '../../film-catalog/models/Film';
import {Order} from '../../utils/types/types';

export namespace FILM_ACTION {
  export const LOAD_FILMS = '[FILMS] LOAD_FILMS';
  export const GET_FILMS = '[FILMS] GET_FILMS';
  export const ADD_FAVORITE = '[FILMS] ADD_FAVORITE';
  export const DEL_FAVORITE = '[FILMS] DEL_FAVORITE';
  export const SET_ORDER = '[FILMS] SET_ORDER';
}
export class GetFilms implements Action {
  readonly type = FILM_ACTION.GET_FILMS;
  constructor() {}
}
export class LoadFilms implements Action {
  readonly type = FILM_ACTION.LOAD_FILMS;
  constructor(public payload: Film[]) {}
}
export class AddFavorite implements Action {
  readonly type = FILM_ACTION.ADD_FAVORITE;
  constructor(public payload: Film) {}
}
export class DelFavorite implements Action {
  readonly type = FILM_ACTION.DEL_FAVORITE;
  constructor(public payload: Film) {}
}
export class SetOrder implements Action {
  readonly type = FILM_ACTION.SET_ORDER;
  constructor(public payload: Order) {}
}

export type FilmsAction = SetOrder | AddFavorite | DelFavorite | LoadFilms | GetFilms;
