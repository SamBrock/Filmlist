'use client';

import useSWR from 'swr';

import { trpc } from '@/lib/trpc';

import { useMovieSearchStore } from './MovieSearchProvider';
import { MovieSearchResult } from './MovieSearchResult';

export const MovieSearchResults = () => {
  const query = useMovieSearchStore((s) => s.query);

  const { data } = useSWR(['search', query], () => trpc.movies.search.query({ query }));

  if (!data) {
    return null;
  }
  return (
    <div className="border-border border-t p-1">
      {data && data?.map((movie) => <MovieSearchResult key={movie.id} movie={movie} />)}
    </div>
  );
};
