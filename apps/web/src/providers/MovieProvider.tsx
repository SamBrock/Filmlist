'use client';

import { createContext, useContext } from 'react';

import type { Movie } from '@filmlist/api/app.schemas';

import { type MoviePosterColors } from '@/lib/utils/imageColor';

type MovieContext = {
  movie: Movie;
  colors: MoviePosterColors;
};

const MovieContext = createContext<MovieContext | undefined>(undefined);

type MovieProviderProps = {
  movie: Movie;
  colors: MoviePosterColors;
};

export const MovieProvider = ({ movie, colors, ...props }: React.PropsWithChildren<MovieProviderProps>) => {
  return <MovieContext.Provider value={{ movie, colors }}>{props.children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
