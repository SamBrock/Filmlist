'use client';

import { cn } from '@/lib/utils/cn';

import { useMovieSearchContext } from '../MovieSearchProvider';
import { MovieSearchResult } from '../MovieSearchResult';

// import { useSearchMoviesQuery } from './useSearchMoviesQuery';

export const MovieSearchResults = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div></div>;
  // const query = useMovieSearchContext((context) => context.query);
  // // const response = useSearchMoviesQuery({ query });

  // if (!query || !response.data) {
  //   return null;
  // }
  // return (
  //   <div className={cn('absolute mt-2 w-full rounded-lg bg-neutral-950 p-1 shadow-lg', className)} {...props}>
  //     {response.data?.map((movie) => <MovieSearchResult key={movie.id} movie={movie} />)}
  //   </div>
  // );
};
