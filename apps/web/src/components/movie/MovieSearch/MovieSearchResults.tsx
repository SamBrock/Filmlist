'use client';

import useSWR from 'swr';

import { trpc } from '@/lib/trpc';

import { useMovieSearchStore } from './MovieSearchProvider';
import { MovieSearchResult } from './MovieSearchResult';

export const MovieSearchResults = () => {
  const query = useMovieSearchStore((s) => s.query);

  const { data } = useSWR(['search', query], () => trpc.movies.search.query({ query }));

  return (
    <div className="bg-foreground mt-2 rounded-lg p-1">
      {data && data?.map((movie) => <MovieSearchResult movie={movie} />)}
    </div>
  );
};
