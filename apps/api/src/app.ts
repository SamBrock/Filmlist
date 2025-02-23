import { OpenAPIHono } from '@hono/zod-openapi';

import movies from './routes/movies/movies.routes';

const app = new OpenAPIHono().basePath('/api');

app.route('/', movies);

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
});

const routes = [movies] as const;

export type AppType = (typeof routes)[number];

export default app;
