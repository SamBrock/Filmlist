import { serve } from '@hono/node-server';
import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { appRouter } from './app.router';

const app = new Hono();

app.use('/*', cors({ origin: 'http://localhost:3000' }));
app.use('/trpc/*', trpcServer({ router: appRouter }));

serve({
  fetch: app.fetch,
  port: 8787,
  hostname: 'localhost',
});

export default app;
