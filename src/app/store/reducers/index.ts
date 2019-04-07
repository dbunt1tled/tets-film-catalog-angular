import * as filmState from '../state/film-state';
import * as filmReducer from '../reducers/films';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';

export interface State {
  films: filmState.FilmState;
}

export const reducers: ActionReducerMap<State> = {
  films: filmReducer.filmsReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getFilmState =
  createFeatureSelector<filmState.FilmState>('films');

export const getFilms = createSelector(
  getFilmState,
  filmState.getFilms,
);

export const getFavorites = createSelector(
  getFilmState,
  filmState.getFavorites,
);
export const getOrder = createSelector(
  getFilmState,
  filmState.getOrder,
);
