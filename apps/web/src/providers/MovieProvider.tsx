'use client';

import { createContext } from 'react';

import type { Movie } from '@filmlist/api/app.schemas';

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
