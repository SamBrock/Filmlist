import type { Movie, UserMovieActivity } from '@filmlist/api/app.types';
import { cn } from '@/lib/utils/cn';
import { MovieActivityStoreProvider } from '@/providers/MovieActivityStoreProvider';
import { MovieProvider } from '@/providers/MovieProvider';
import { DividerDot } from '../common/Divider';
import {
  MovieActionLikeButton,
  MovieActionWatchButton,
  MovieActionWatchlistButton,
} from '../movie-actions/MovieActions';
import { MovieActivityStoreSubscriber } from '../movie-actions/MovieActivityStoreSubscriber';
import { MovieBackdropImage } from '../movie/MovieBackdrop';
import { MovieBackdropSpring } from '../movie/MovieBackdropSpring';
import { MoviePoster } from '../movie/MoviePoster';
import { StarInput } from '../movie/StarInput';

type MovieViewProps = {
  movie: Movie;
  initialActivity: UserMovieActivity;
};

export const MovieView = ({ movie, initialActivity }: MovieViewProps) => {
  return (
    <MovieProvider movie={movie}>
      <MovieActivityStoreProvider initialActivity={initialActivity}>
        <div className="relative">
          <MovieBackdropSpring>
            <MovieBackdropImage className="w-full object-cover" backdropPath={movie.backdropPath} />
          </MovieBackdropSpring>
          {/* <div className="flex h-[calc(100vh-200px)] justify-center overflow-clip">
        </div> */}

          <div className="from-bg-subtle absolute -bottom-[2px] left-0 h-full w-full bg-linear-to-t to-transparent" />

          <MovieViewGrid className="px-margin absolute bottom-0 left-1/2 container -translate-x-1/2 gap-8">
            <MoviePoster
              className="self-end rounded-lg object-cover drop-shadow-xl"
              posterPath={movie.posterPath}
            />

            <div className="mt-24 flex w-full flex-col gap-2 self-end">
              <h1
                className="leading-10 font-black antialiased drop-shadow-md"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
              >
                {movie.title}
                {/* <span className="font-semibold text-sm ml-2 text-text-subtle/70">{new Date(movie.releaseDate).getFullYear()}</span> */}
              </h1>

              <div className="text-text-subtle/70 flex items-center gap-1 text-sm">
                <span className="font-medium">{new Date(movie.releaseDate).getFullYear()}</span>
                <DividerDot />
                <span>
                  <span>Dir. </span> <span className="font-medium">{movie.directors.join(', ')}</span>
                </span>
              </div>

              {/* <p className="text-text-subtle mt-4 max-w-5/6 text-sm leading-5">{movie.overview}</p> */}

              <div className="mt-4 flex items-center justify-start gap-2">
                <MovieActionWatchButton />
                <MovieActionLikeButton />
                <MovieActionWatchlistButton />
                <div className="ml-2 flex h-10 justify-center rounded-full">
                  <div className="w-min self-center">
                    <StarInput initialRating={0} />
                  </div>
                </div>
              </div>
            </div>
          </MovieViewGrid>
        </div>

        <div className="px-margin container mx-auto mt-8 mb-[1000px]">
          <MovieViewGrid className="gap-8">
            {/* <div className="bg-text-default/5 flex flex-col gap-2 rounded-lg p-3">
            <div className="grid grid-cols-3 gap-2">
              <MovieActionWatchButton />
              <MovieActionLikeButton />
              <MovieActionWatchlistButton />
            </div>
            <div className="flex justify-center rounded-md p-2">
              <div className="w-min self-center">
                <StarInput initialRating={0} />
              </div>
            </div>
          </div> */}

            {/* <div className="flex flex-col gap-4">
            <p className="text-text-subtle max-w-5/6 leading-7">{movie.overview}</p>

            <div className="text-text-muted mt-4 flex items-center gap-2 text-sm">
              {movie.genres?.map((genre) => <MovieGenre key={genre} genre={genre} />)}
              <DividerDot />
              <div className="font-medium">{runtimeMinutesToHours(movie.runtime)}</div>
            </div>
          </div> */}
          </MovieViewGrid>
        </div>

        <MovieActivityStoreSubscriber />
      </MovieActivityStoreProvider>
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
