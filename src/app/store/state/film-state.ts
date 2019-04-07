import {Film} from '../../film-catalog/models/Film';
import {Order} from '../../utils/types/types';

export interface FilmState {
  films: Film[];
  favorites: number[];
  order: Order;
}

export const initialState: FilmState = {
  films: [],
  favorites: [],
  order: 'ASC'
};
export const getFilms = (state: FilmState) => state.films;
export const getFavorites = (state: FilmState) => state.favorites;
export const getOrder = (state: FilmState) => state.order;
