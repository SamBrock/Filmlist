import { notFound } from 'next/navigation';

import { MovieBackdropImage } from '@/components/movie/MovieBackdrop';
import { MovieGenre } from '@/components/movie/MovieGenre';
import {
  MovieLikeInput,
  MovieRatingInput,
  MovieWatchInput,
  MovieWatchlistInput,
} from '@/components/movie/MovieInputs';
import { MovieOverview } from '@/components/movie/MovieOverview';
import { MoviePoster } from '@/components/movie/MoviePoster';
import { MovieTitle } from '@/components/movie/MovieTitle';
import { trpc } from '@/lib/trpc';
import { generateMoviePosterColors } from '@/lib/utils/imageColor';
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
        <div className="flex h-[calc(100vh-280px)] justify-center overflow-clip">
          <MovieBackdropImage className="w-full object-cover" backdropPath={movie.backdropPath} />
        </div>

        <div className="from-foreground absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t to-transparent" />

        <div className="absolute bottom-0 grid w-full grid-cols-[minmax(220px,1fr)_5fr] gap-8 px-8 pb-4">
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
              <span className="text-text/70 font-medium">{new Date(movie.releaseDate).getFullYear()}</span>
              <span className="text-text/60 ml-4">Directed by</span>
              <span className="text-text/70 font-medium">{movie.directors.join(', ')}</span>
            </div>

            {/* <div className="space-x-2">
              {movie.genres.map((genre) => (
                <MovieGenre key={genre} genre={genre} colors={moviePosterColors} />
              ))}
            </div> */}

            <div>
              <div className="flex w-full items-center gap-2">
                {/* <div className="text-sm font-medium text-white/60">
                  {new Date(movie.releaseDate).getFullYear()}
                </div>
                <div className="text-white/20 select-none">•</div>
                <span className="text-text/60 text-sm font-medium">Dir. {movie.directors.join(', ')}</span>
                <div className="text-white/20 select-none">•</div>
                <div className="text-sm font-medium text-white/60">{movie.genres.join(', ')}</div>
                <div className="text-white/20 select-none">•</div>
                <div className="text-sm font-medium text-white/60">{movie.runtime} mins</div> */}
              </div>
            </div>

            {/* <div className="border-text/20 flex w-full items-center rounded-md border px-4 py-2">
              <MovieStarsInput initialRating={0} />
            </div> */}
          </div>
        </div>
      </div>

      <div className="sm:debug grid w-full grid-cols-[minmax(220px,1fr)_5fr] gap-8 px-8 py-8">
        <div className="grid grid-cols-3 gap-1 self-start">
          <MovieWatchInput />
          <MovieLikeInput />
          <MovieWatchlistInput />
          <MovieRatingInput className="col-span-3" initialRating={0} />
        </div>
        <div className="mb-[1000px] flex w-full flex-col gap-8">
          <MovieOverview overview={movie.overview} className="w-full whitespace-pre-wrap lg:w-[50vw]" />

          <div className="space-x-2">
            {movie.genres.map((genre) => (
              <MovieGenre key={genre} genre={genre} colors={moviePosterColors} />
            ))}
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
