import { client } from '@filmlist/lib/api';

import { AddButton } from './AddButton';

export default async function Home() {
  // const { data } = await client.GET('/v1/movies/{id}', {
  //   params: {
  //     path: { id: 694 },
  //   },
  // });
  return <AddButton movieId={694} />;
}
