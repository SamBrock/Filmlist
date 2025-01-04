import { createStore } from 'zustand/vanilla';

export type MovieSearchState = {
  query: string;
};

export type MovieSearchActions = {
  setQuery: (query: string) => void;
};

export type MovieSearchStore = MovieSearchState & MovieSearchActions;

export const defaultInitState: MovieSearchState = {
  query: '',
};

export const createMovieSearchStore = (initState: MovieSearchState = defaultInitState) => {
  return createStore<MovieSearchStore>()((set) => ({
    ...initState,
    setQuery: (query) => set({ query }),
  }));
};
