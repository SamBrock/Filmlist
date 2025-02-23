import { notFound } from 'next/navigation';

import { api } from '@filmlist/lib/api';

import { MovieView } from '@/components/views/MovieView';

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

  const movie = await api.GET('/api/getMovie/{movieId}', {
    params: {
      path: { movieId: movieId.toString() },
    },
  });

  return <MovieView movie={movie.data} />;
}

// Popularity
// Average rating
// Seen / watched
// Number of lists
// Rotten tomatoes score?

// Streaming options
