'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { createMovieSearchStore, MovieSearchStore } from './store/createMovieSearchStore';

export type MovieSearchStoreApi = ReturnType<typeof createMovieSearchStore>;

export const MovieSearchStoreContext = createContext<MovieSearchStoreApi | undefined>(undefined);

export interface MovieSearchStoreProviderProps {
  children: ReactNode;
}

export const MovieSearchStoreProvider = ({ children }: MovieSearchStoreProviderProps) => {
  const storeRef = useRef<MovieSearchStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createMovieSearchStore();
  }

  return (
    <MovieSearchStoreContext.Provider value={storeRef.current}>{children}</MovieSearchStoreContext.Provider>
  );
};

export const useMovieSearchStore = <T,>(selector: (store: MovieSearchStore) => T): T => {
  const context = useContext(MovieSearchStoreContext);

  if (!context) {
    throw new Error(`useMovieSearchStore must be used within MovieSearchStoreProvider`);
  }

  return useStore(context, selector);
};
