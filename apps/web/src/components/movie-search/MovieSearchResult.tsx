import Link from 'next/link';

import { trpc } from '@/lib/trpc';
import { cn } from '@/lib/utils/cn';

import { MoviePoster } from '../movie/MoviePoster';

type MovieSearchResultProps = React.ComponentProps<'div'> & {
  movie: Awaited<ReturnType<typeof trpc.movies.search.query>>[number];
};

export const MovieSearchResult = ({ movie, className, ...props }: MovieSearchResultProps) => {
  return (
    <div
      className={cn(
        'group z-50 flex cursor-pointer items-center rounded-md px-3 py-2 hover:bg-white/5',
        className
      )}
      {...props}
    >
      <MoviePoster posterPath={movie.posterPath} className="w-[30px] rounded-xs shadow-md" />
      <div className="ml-3 flex flex-col">
        <div className="flex items-baseline">
          <Link href={`/film/${movie.id}`}>
            <span className="text-sm font-medium"> {movie.title}</span>
          </Link>
          <span className="text-secondary ml-1 text-xs">{new Date(movie.releaseDate).getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
