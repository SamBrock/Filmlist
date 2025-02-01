import { notFound } from 'next/navigation';

import { MovieBackdropImage } from '@/components/movie/MovieBackdrop';
import { MoviePoster } from '@/components/movie/MoviePoster';
import { MovieTitle } from '@/components/movie/MovieTitle';
import { trpc } from '@/lib/trpc';
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

  return (
    <MovieProvider movie={movie}>
      <div className="relative">
        <div className="flex h-[calc(100vh-20vh)] justify-center overflow-clip">
          <MovieBackdropImage className="w-full object-cover" backdropPath={movie.backdropPath} />
        </div>

        <div className="from-foreground absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t to-transparent" />

        <div className="absolute bottom-0 w-full">
          <div className="flex gap-12 px-8 pb-8">
            <div className="w-[280px] self-end">
              <MoviePoster className="rounded-lg drop-shadow-xl" posterPath={movie.posterPath} />
            </div>

            <div className="mb-8 flex flex-col self-end">
              <div className="flex items-baseline gap-4">
                <MovieTitle title={movie.title} className="" />
                <div className="leading-0 font-medium text-white/80">
                  {new Date(movie.releaseDate).getFullYear()}
                </div>

                <div className="leading-0">
                  <span className="text-white/40">Directed by</span>
                  <span className="ml-2 font-medium text-white/80">{movie.directors.join(',')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}
