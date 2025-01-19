import { trpc } from '@/lib/trpc';
import { cn } from '@/lib/utils/cn';

import { Button } from '../common/Button';
import { MoviePoster } from '../movie/MoviePoster';

type MovieSearchResultProps = React.ComponentProps<'div'> & {
  movie: Awaited<ReturnType<typeof trpc.movies.search.query>>[number];
};

export const MovieSearchResult = ({ movie, className, ...props }: MovieSearchResultProps) => {
  return (
    <div
      className={cn(
        'group flex cursor-pointer items-center rounded-md px-3 py-2 hover:bg-white/5',
        className
      )}
      {...props}
    >
      <MoviePoster
        source="tmdb"
        size="w92"
        posterPath={movie.posterPath}
        className="w-[30px] rounded-xs shadow-md"
      />
      <div className="ml-3 flex flex-col">
        <div className="flex items-baseline">
          <span className="text-sm font-medium"> {movie.title}</span>
          <span className="text-secondary ml-1 text-xs">{new Date(movie.releaseDate).getFullYear()}</span>
        </div>
        <div className="text-secondary text-xs">Dir. {movie.directors?.map((d) => d.name).join(',')}</div>
      </div>

      {/* <div className="invisible ml-auto flex gap-2 group-hover:visible">
        <Button size="xs" variant="outline">
          Add to watchlist
        </Button>
        <Button size="xs" variant="outline">
          Log
        </Button>
      </div> */}
    </div>
  );
};
