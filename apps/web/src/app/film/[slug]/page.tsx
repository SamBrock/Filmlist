import { notFound } from 'next/navigation';

import { MovieView } from '@/components/views/MovieView';
import { trpc } from '@/lib/trpc';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MoviePage(props: Props) {
  const params = await props.params;

  const movieId = parseInt(params.slug.split('-')[0]);
  if (!movieId) {
    notFound();
  }

  const movie = await trpc.movies.movie.query({ movieId });

  return <MovieView movie={movie} />;
}

// Popularity
// Average rating
// Seen / watched
// Number of lists
// Rotten tomatoes score?

// Streaming options
