'use client';

import { MovieSearchInput } from '@/components/movie-search/MovieSearchInput';
import { MovieSearchContextProvider } from '@/components/movie-search/MovieSearchProvider';
import { MovieSearchResults } from '@/components/movie-search/hooks/MovieSearchResults';

export const HeaderMovieSearch = () => {
  return (
    <MovieSearchContextProvider>
      <div className="relative ml-6 w-full max-w-md">
        <MovieSearchInput />
        <MovieSearchResults />
      </div>
    </MovieSearchContextProvider>
  );
};
