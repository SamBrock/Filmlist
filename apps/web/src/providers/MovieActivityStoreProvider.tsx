'use client';

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import type { UserMovieActivity } from '@filmlist/api/app.types';
import { createMovieActivityStore, MovieActivityStore } from '@/store/MovieActivityStore';

export type MovieActivityStoreApi = ReturnType<typeof createMovieActivityStore>;

export const MovieActivityStoreContext = createContext<MovieActivityStoreApi | undefined>(undefined);

export type MovieActivityStoreProviderProps = React.PropsWithChildren & {
  initialActivity: UserMovieActivity;
};

export const MovieActivityStoreProvider = ({
  initialActivity,
  ...props
}: MovieActivityStoreProviderProps) => {
  const storeRef = useRef<MovieActivityStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createMovieActivityStore(initialActivity);
  }

  return (
    <MovieActivityStoreContext.Provider value={storeRef.current}>
      {props.children}
    </MovieActivityStoreContext.Provider>
  );
};

export const useMovieActivityStore = <T,>(selector: (store: MovieActivityStore) => T): T => {
  const context = useContext(MovieActivityStoreContext);

  if (!context) {
    throw new Error(`useMovieActivityStore must be used within MovieActivityStoreProvider`);
  }

  return useStore(context, selector);
};

export const useMovieActivityStoreSubscribe = () => {
  const context = useContext(MovieActivityStoreContext);

  if (!context) {
    throw new Error(`useMovieActivityStore must be used within MovieActivityStoreProvider`);
  }

  return context.subscribe;
};
