import { notFound } from 'next/navigation';

import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { MovieBackdropImage } from '@/components/movie/MovieBackdrop';
import { MovieGenre } from '@/components/movie/MovieGenre';
import { MovieOverview } from '@/components/movie/MovieOverview';
import { MoviePoster } from '@/components/movie/MoviePoster';
import { MovieTitle } from '@/components/movie/MovieTitle';
import { StarInput } from '@/components/movie/StarInput';
import { trpc } from '@/lib/trpc';
import { generateMoviePosterColors } from '@/lib/utils/imageColor';
import { runtimeMinutesToHours } from '@/lib/utils/runtime';
import { MovieProvider } from '@/providers/MovieProvider';

type Props = {
  params: {
    slug: string;
  };
};

export default async function MoviePage(props: Props) {
  const params = await props.params;

  const movieId = parseInt(params.slug.split('-')[0]);
  if (!movieId) {
    notFound();
  }

  const movie = await trpc.movies.movie.query({ movieId });

  const moviePosterColors = await generateMoviePosterColors(movie.posterPath);

  return (
    <MovieProvider movie={movie} colors={moviePosterColors}>
      <div className="relative">
        <div className="flex h-[calc(100vh-200px)] justify-center overflow-clip">
          <MovieBackdropImage className="w-full object-cover" backdropPath={movie.backdropPath} />
        </div>

        <div className="from-foreground absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t to-transparent" />

        <div className="absolute bottom-0 grid w-full grid-cols-[minmax(240px,240px)_5fr] gap-8 px-8 pb-4">
          <div className="self-end">
            <MoviePoster className="rounded-lg object-cover drop-shadow-xl" posterPath={movie.posterPath} />
            {/* <div className="mt-2 -mb-5 flex items-center gap-2">
              <div className="text-xs font-medium">{Math.floor((movie.voteAverage * 10) / 2) / 10}</div>
            </div> */}
          </div>

          <div className="flex w-full flex-col self-end">
            <div className="mb-2 flex w-full flex-wrap items-baseline gap-x-3 gap-y-2">
              <MovieTitle title={movie.title} className="" />
            </div>
            <div className="flex items-center gap-1">
              <div className="text-sm font-medium text-white/60">
                {new Date(movie.releaseDate).getFullYear()}
              </div>
              <div className="text-white/20 select-none">•</div>
              <span className="text-text/60 font-medium">Directed by {movie.directors.join(', ')}</span>
              {/* <span className="text-text/70 font-medium">{new Date(movie.releaseDate).getFullYear()}</span>
              <span className="text-text/50 ml-2">Directed by</span>
              <span className="text-text/70 ml-0.5 font-medium">{movie.directors.join(', ')}</span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-[minmax(240px,240px)_5fr] gap-8 px-8 py-2">
        <div className="bg-theme-neutral/5 flex flex-col self-start rounded-lg p-3 drop-shadow-lg">
          <div className="flex flex-col self-start px-1 pt-1">
            <StarInput initialRating={0} />
            <div className="mt-1 flex w-full gap-1 self-start text-xs font-medium text-white/40">
              <span className="text-xs font-medium">Rate</span>
              <div className="text-white/20 select-none">•</div>
              <span className="font-medium">
                Avg. <span className="">{movie.voteAverage}</span>
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button size="sm" variant="outline" className="w-full">
              <Icon name="eye" className="stroke-text-secondary mr-2 -ml-1 size-[1.2rem]" strokeWidth={1.5} />
              Watch
              <span className="ml-auto text-xs font-medium">2.3M</span>
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              <Icon
                name="heart"
                className="stroke-text-secondary mr-2 -ml-1 size-[1.2rem]"
                strokeWidth={1.5}
              />
              Like
              <span className="ml-auto text-xs font-medium">864K</span>
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              <Icon
                name="plus"
                className="stroke-text-secondary mr-2 -ml-1 size-[1.2rem]"
                strokeWidth={1.5}
              />
              Watchlist
              <span className="ml-auto text-xs font-medium">120K</span>
            </Button>
          </div>
        </div>
        <div className="mb-[1000px] flex w-full flex-col gap-8">
          {/* <div className="font-semibold text-white/50">{movie.tagline}</div> */}

          <MovieOverview overview={movie.overview} className="w-full whitespace-pre-wrap lg:w-[50vw]" />

          <div className="flex items-center gap-2">
            {movie.genres.map((genre) => (
              <MovieGenre key={genre} genre={genre} colors={moviePosterColors} />
            ))}
            {/* <div className="text-white/20 select-none">•</div>
              <div className="text-sm font-medium text-white/60">
                {new Date(movie.releaseDate).getFullYear()}
              </div> */}
            {/* <div className="text-white/20 select-none">•</div> */}
            {/* <div className="text-sm font-medium text-white/60">{movie.genres.join(', ')}</div> */}
            <div className="text-white/20 select-none">•</div>
            <div className="text-sm font-medium text-white/60">{runtimeMinutesToHours(movie.runtime)}</div>
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}

// Popularity
// Average rating
// Seen / watched
// Number of lists
// Rotten tomatoes score?

// Streaming options
