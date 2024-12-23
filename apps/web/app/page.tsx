import * as apiClient from '@filmlist/lib/api/client';
import * as tmdbClient from '@filmlist/lib/tmdb/client';

export default async function Home() {
  const { data } = await tmdbClient.client.GET('/v1/movies/{id}', {
    params: {
      path: { id: 694 },
    },
  });

  return <div className="">{data?.title}</div>;
}
