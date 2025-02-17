import { Hono } from 'hono';

import movie from './routers/movie';

const app = new Hono().basePath('/api').route('/movie', movie);

export default app;

export type AppType = typeof app;
