import { client } from '@filmlist/lib/api';

import { AddButton } from './AddButton';
import { trpc } from './trpc';

export default async function Home() {
  const { data } = await client.GET('/v1/logs/findUserLogs', {});
  const { greeting } = await trpc.hello.query({ name: 'world' });

  return (
    <div>
      {data?.map((log) => <div>{log.id}</div>)}

      <div>{greeting}</div>
      <AddButton movieId={123} />
    </div>
  );
}
