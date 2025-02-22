import { OpenAPIHono } from '@hono/zod-openapi';

import movies from './routes/movies/movies.index';

const app = new OpenAPIHono();

const routes = [movies] as const;

routes.forEach((route) => {
  app.route('/', route);
});

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
});

export type AppType = (typeof routes)[number];

export default app;
