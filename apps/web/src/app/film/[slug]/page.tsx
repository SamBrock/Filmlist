import { notFound } from 'next/navigation';

import { MovieBackdropImage } from '@/components/movie/MovieBackdrop';
import { MoviePoster } from '@/components/movie/MoviePoster';
import { MovieStarsInput } from '@/components/movie/MovieStarsInput';
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

      <div
        className="mb-12 h-[20vh] px-8 pt-4"
        style={
          {
            // background: `linear-gradient(to bottom, rgb(${colorPalette.Vibrant?.rgb.join(' ')}/ 10%), rgb(${colorPalette.Vibrant?.rgb.join(' ')}/ 8%) 0%, transparent)`,
          }
        }
      >
        {/* <div className="mt-4 flex items-center gap-1 rounded-md border border-white/10 px-8 py-4">
          <Star
            className="size-8"
            style={{
              fill: `rgb(${colorPalette.Vibrant?.rgb.join(' ')})`,
              stroke: `rgb(${colorPalette.Vibrant?.rgb.join(' ')})`,
            }}
          />
        </div> */}
      </div>
    </MovieProvider>
  );
}
