import { Movie } from '@prisma/client';

import { MoviePoster } from './MoviePoster';

type MovieItemProps = React.ComponentProps<'div'> & {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div>
      <MoviePoster source="tmdb" posterPath={movie.posterPath} size="w342" className="rounded-sm shadow-md" />
    </div>
  );
};
