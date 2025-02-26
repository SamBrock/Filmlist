'use client';

import { createContext, useContext } from 'react';

import type { Movie } from '@filmlist/api/app.types';

type MovieContext = {
  movie: Movie;
};

const MovieContext = createContext<MovieContext | undefined>(undefined);

type MovieProviderProps = {
  movie: Movie;
};

export const MovieProvider = ({ movie, ...props }: React.PropsWithChildren<MovieProviderProps>) => {
  return <MovieContext.Provider value={{ movie }}>{props.children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
