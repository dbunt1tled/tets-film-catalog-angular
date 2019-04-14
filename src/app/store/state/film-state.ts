import {Film} from '../../film-catalog/models/Film';
import {Order} from '../../utils/types/types';
import {FilmApiService} from '../../api/film/film-api.service';

export interface FilmState {
  films: Film[];
  favorites: number[];
  order: string;
}

export const initialState: FilmState = {
  films: [],
  favorites: [],
  order: FilmApiService.SORT_BY_RELEASE_DATE_ASC
};
export const getFilms = (state: FilmState) => state.films;
export const getFavorites = (state: FilmState) => state.favorites;
export const getOrder = (state: FilmState) => state.order;
