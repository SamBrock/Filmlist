import type { Movie } from '@prisma/client';

import { MoviePoster } from '../MoviePoster';

type MovieItemProps = React.ComponentProps<'div'> & {
  movie: Movie;
};

export const MovieItem = ({ movie, className, ...props }: MovieItemProps) => {
  return (
    <div className="border-border cursor-pointer overflow-clip rounded-sm border">
      <div className="overflow-clip">
        <MoviePoster source="tmdb" posterPath={movie.posterPath} size="w500" />
      </div>
      {/* <div className="mt-1 flex items-baseline">
        <span className="text-sm font-medium whitespace-nowrap">{movie.title}</span>
        <span className="text-secondary ml-2 text-xs">{new Date(movie.releaseDate).getFullYear()}</span>
      </div> */}
    </div>
  );
};
