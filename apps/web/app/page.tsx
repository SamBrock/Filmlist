import { client } from '@filmlist/lib/api/client';

export default async function Home() {
  const { data } = await client.GET('/v1/movies/{id}', {
    params: {
      path: { id: 694 },
    },
  });

  return <div>{data?.title}</div>;
}
