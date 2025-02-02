import { notFound } from 'next/navigation';

import { MovieBackdropImage } from '@/components/movie/MovieBackdrop';
import { MovieGenre } from '@/components/movie/MovieGenre';
import { MovieOverview } from '@/components/movie/MovieOverview';
import { MoviePoster } from '@/components/movie/MoviePoster';
import { MovieStarsInput } from '@/components/movie/MovieStarsInput';
import { MovieTitle } from '@/components/movie/MovieTitle';
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
  console.log(movie.genres);

  const moviePosterColors = await generateMoviePosterColors(movie.posterPath);

  return (
    <MovieProvider movie={movie} colors={moviePosterColors}>
      <div className="relative">
        <div className="flex h-[calc(100vh-200px)] justify-center overflow-clip">
          <MovieBackdropImage className="w-full object-cover" backdropPath={movie.backdropPath} />
        </div>

        <div className="from-foreground absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t to-transparent" />

        <div className="absolute bottom-0 w-full">
          <div className="flex gap-12 px-8 pb-8">
            <div className="w-[15vw] self-end">
              <MoviePoster className="rounded-lg drop-shadow-xl" posterPath={movie.posterPath} />
            </div>

            <div className="mb-0 flex w-full flex-col self-end">
              <div className="mb-2 flex w-full items-baseline gap-4">
                <MovieTitle title={movie.title} className="" />
                <div className="leading-0 text-white/70">{new Date(movie.releaseDate).getFullYear()}</div>

                <div className="leading-0">
                  <span className="text-white/40">Directed by</span>
                  <span className="ml-2 text-white/70">{movie.directors.join(', ')}</span>
                </div>
              </div>

              <div className="mt-4 flex w-full items-center rounded-md border border-white/10 px-4 py-2">
                <MovieStarsInput initialRating={0} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 ml-[calc(15vw+20px)] flex max-w-lg flex-col gap-8">
        <div className="flex items-center gap-2">
          {movie.genres.map((genre, index) => (
            <MovieGenre key={index} genre={genre} colors={moviePosterColors} />
          ))}

          <div className="text-white/20">•</div>

          <div className="text-sm font-medium text-white/60">{runtimeMinutesToHours(movie.runtime)}</div>
        </div>

        <MovieOverview overview={movie.overview} />
      </div>
    </MovieProvider>
  );
}
