import { hc } from 'hono/client';

import { HonoAppType } from '@filmlist/hono';

export default async function Home() {
  const client = hc<HonoAppType>('http://localhost:8787');

  const test = await client.api.posts.$get().then((d) => d.json());

  return (
    <div className="mx-auto w-[1024px]">
      <div className="mx-auto w-[700px]"></div>
    </div>
  );
}
