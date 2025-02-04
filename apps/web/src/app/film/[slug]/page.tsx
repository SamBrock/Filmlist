import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { MovieBackdropImage } from '@/components/movie/MovieBackdrop';
import { MovieGenre } from '@/components/movie/MovieGenre';
import { MovieOverview } from '@/components/movie/MovieOverview';
import { MoviePoster } from '@/components/movie/MoviePoster';
import { MovieStarsInput } from '@/components/movie/MovieStarsInput';
import { MovieTitle } from '@/components/movie/MovieTitle';
import { MovieWhereToWatch } from '@/components/movie/MovieWhereToWatch/MovieWhereToWatch';
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

        <div className="absolute bottom-0 grid w-full grid-cols-[minmax(230,1fr)_5fr] gap-8 px-8 pb-8">
          <div className="self-end">
            <MoviePoster className="rounded-lg object-cover drop-shadow-xl" posterPath={movie.posterPath} />
          </div>

          <div className="flex w-full flex-col self-end">
            <div className="mb-4 flex w-full flex-wrap items-baseline gap-x-6 gap-y-2">
              <MovieTitle title={movie.title} className="" />

              <div className="flex items-center gap-1">
                <span className="text-text/80 font-medium">{new Date(movie.releaseDate).getFullYear()}</span>
                <span className="text-text/60 ml-4">Directed by</span>
                <span className="text-text/80 ml-0.5 font-medium">{movie.directors.join(', ')}</span>
              </div>
            </div>

            <div className="border-text/20 flex w-full items-center rounded-md border px-4 py-2">
              <MovieStarsInput initialRating={0} />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:debug grid w-full grid-cols-[minmax(230,1fr)_5fr] gap-8 px-8 py-4">
        <div className="border-border h-[400px] rounded-lg border">
          <Suspense fallback={null}>
            <MovieWhereToWatch movieId={movieId} />
          </Suspense>
        </div>
        <div className="mb-12 flex w-full flex-col gap-8">
          <div className="flex w-full items-center gap-2">
            {movie.genres.map((genre, index) => (
              <MovieGenre key={index} genre={genre} colors={moviePosterColors} />
            ))}

            <div className="text-white/20 select-none">•</div>

            <div className="text-sm font-medium text-white/60">{movie.runtime} mins</div>
          </div>

          <MovieOverview overview={movie.overview} className="w-full whitespace-pre-wrap lg:w-[50vw]" />
        </div>
      </div>
    </MovieProvider>
  );
}
