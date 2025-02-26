import { produce } from 'immer';
import { createStore } from 'zustand/vanilla';

export type MovieActivityStoreState = {
  rating: number;
  watched: boolean;
  liked: boolean;
  watchlist: boolean;
};

export type MovieActivityStoreActions = {
  dispatch: (args: MovieActivityAction) => void;
};

export type MovieActivityStore = MovieActivityStoreState & MovieActivityStoreActions;

export const defaultInitState: MovieActivityStoreState = {
  watched: false,
  liked: false,
  rating: 0,
  watchlist: false,
};

export const createMovieActivityStore = (initState: MovieActivityStoreState = defaultInitState) => {
  return createStore<MovieActivityStore>()((set) => ({
    ...initState,
    dispatch: (action) => set((state) => movieActivityReducer(state, action)),
  }));
};

type MovieActivityAction =
  | { type: 'TOGGLE_LIKE' }
  | { type: 'TOGGLE_WATCH' }
  | { type: 'TOGGLE_WATCHLIST' }
  | { type: 'RATE'; payload: { rating: number } }
  | { type: 'REMOVE_RATING' };

export const movieActivityReducer = produce((draft: MovieActivityStoreState, action: MovieActivityAction) => {
  switch (action.type) {
    case 'TOGGLE_LIKE': {
      if (!draft.watched && !draft.liked) {
        draft.watched = true;
      }
      draft.liked = !draft.liked;
      break;
    }
    case 'TOGGLE_WATCH': {
      draft.watched = !draft.watched;
      break;
    }
    case 'RATE': {
      if (!draft.watched && action.payload.rating > 0) {
        draft.watched = true;
      }
      draft.rating = action.payload.rating;
      break;
    }
    case 'TOGGLE_WATCHLIST': {
      draft.watchlist = !draft.watchlist;
      break;
    }
    case 'REMOVE_RATING': {
      draft.rating = 0;
      break;
    }
    default: {
      break;
    }
  }
});
