import { Movie } from '@prisma/client';

import { MoviePoster } from './MoviePoster';

type MovieItemProps = React.ComponentProps<'div'> & {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div className="cursor-pointer rounded-md p-2 hover:bg-white/5">
      <MoviePoster
        source="tmdb"
        posterPath={movie.posterPath}
        size="w342"
        className="rounded-sm drop-shadow-lg"
      />
      <div className="mt-1.5 flex flex-col px-0.5">
        <div className="text-text/80 overflow-hidden text-sm font-semibold overflow-ellipsis whitespace-nowrap">
          {movie.title}
        </div>
        <div className="text-text/40 text-xs">{new Date(movie.releaseDate).getFullYear()}</div>
      </div>
    </div>
  );
};
