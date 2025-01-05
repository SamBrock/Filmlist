import { logUserMovieAction } from '@/actions/logUserMovieAction';
import { trpc } from '@/lib/trpc';

import { MoviePoster } from '../MoviePoster';

type MovieSearchResultProps = React.ComponentProps<'div'> & {
  movie: Awaited<ReturnType<typeof trpc.movies.search.query>>[number];
};

export const MovieSearchResult = ({ movie }: MovieSearchResultProps) => {
  return (
    <div
      className="flex w-full cursor-pointer items-center rounded-md px-3 py-1 hover:bg-white/5"
      onClick={() =>
        logUserMovieAction({
          movieId: movie.id,
          userId: 1,
          liked: true,
          rating: 3,
        })
      }
    >
      <div className="flex aspect-[1/1.5] h-full w-8 items-center overflow-clip rounded-xs bg-white/10">
        <MoviePoster
          source="tmdb"
          size="w92"
          className="h-full object-fill"
          posterPath={movie.posterPath as string}
        />
      </div>
      <div className="ml-4 flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold">{movie.title}</span>
          <span className="text-xs text-neutral-500">{new Date(movie.releaseDate).getFullYear()}</span>
        </div>
        <div className="mt-0.5">
          <div className="text-xs text-neutral-500">
            Dir. {movie.directors?.map((d) => d.name).join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
};
