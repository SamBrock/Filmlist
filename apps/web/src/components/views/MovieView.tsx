import { Movie } from '@filmlist/api/app.schemas';

import { cn } from '@/lib/utils/cn';
import { runtimeMinutesToHours } from '@/lib/utils/runtime';
import { MovieProvider } from '@/providers/MovieProvider';

import { DividerDot } from '../common/Divider';
import { MovieActions } from '../movie/MovieActions';
import { MovieBackdropImage } from '../movie/MovieBackdrop';
import { MovieGenre } from '../movie/MovieGenre';
import { MoviePoster } from '../movie/MoviePoster';

type MovieViewProps = {
  movie: Movie;
};

export const MovieView = ({ movie }: MovieViewProps) => {
  return (
    <MovieProvider movie={movie}>
      <div className="relative">
        <div className="flex h-[calc(100vh-200px)] justify-center overflow-clip">
          <MovieBackdropImage className="w-full object-cover" backdropPath={movie.backdropPath} />
        </div>

        <div className="from-bg-subtle absolute -bottom-[2px] left-0 h-1/2 w-full bg-linear-to-t to-transparent" />

        <MovieViewGrid className="px-margin absolute bottom-0 left-1/2 container -translate-x-1/2 gap-8">
          <MoviePoster
            className="self-end rounded-lg object-cover drop-shadow-xl"
            posterPath={movie.posterPath}
          />

          <div className="flex w-full flex-col gap-2 self-end">
            <h1
              className="leading-16 font-black antialiased drop-shadow-md"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
            >
              {movie.title}
            </h1>

            <div className="text-text-subtle/70 flex items-center gap-1">
              <span className="font-medium">{new Date(movie.releaseDate).getFullYear()}</span>
              <DividerDot />
              <span>
                <span>Directed by</span> <span className="font-medium">{movie.directors.join(', ')}</span>
              </span>
            </div>
          </div>
        </MovieViewGrid>
      </div>

      <div className="px-margin container mx-auto mt-8 mb-[1000px]">
        <MovieViewGrid className="gap-8">
          <div>
            <MovieActions className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-text-subtle max-w-5/6 leading-7">{movie.overview}</p>

            <div className="text-text-muted mt-4 flex items-center gap-2 text-sm">
              {movie.genres.map((genre) => (
                <MovieGenre key={genre} genre={genre} />
              ))}
              <DividerDot />
              <div className="font-medium">{runtimeMinutesToHours(movie.runtime)}</div>
            </div>
          </div>
        </MovieViewGrid>
      </div>
    </MovieProvider>
  );
};

const MovieViewGrid = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('grid grid-cols-[minmax(240px,240px)_5fr]', className)} {...props}>
      {props.children}
    </div>
  );
};
