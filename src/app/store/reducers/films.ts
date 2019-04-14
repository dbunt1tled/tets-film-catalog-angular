import {initialState} from '../state/film-state';
import {FILM_ACTION, FilmsAction} from '../actions/films';
import {Film} from '../../film-catalog/models/Film';

export function filmsReducer(state = initialState, action: FilmsAction) {
  switch (action.type) {
    case FILM_ACTION.LOAD_FILMS:
      return {
        ...state,
        films: action.payload
      };
    case FILM_ACTION.GET_FILMS:
      return state;
    case FILM_ACTION.SET_ORDER:
      return {
        ...state,
        order: action.payload,
        films: state.films.sort(function (f: Film, s: Film) {
          switch (action.payload.indexOf('.asc')) {
            case -1:
              return f.vote_average > s.vote_average ? 1 : -1;
            default:
              return f.vote_average < s.vote_average ? 1 : -1;
          }
        })
      };
    case FILM_ACTION.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id]
      };
    case FILM_ACTION.DEL_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== action.payload.id)
      };
    default:
      return state;
  }
}

