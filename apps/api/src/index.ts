import { Hono } from 'hono';

import movie from './routes/movies/movie.route';

const app = new Hono().basePath('/api').route('/movie', movie);

export default app;

export type AppType = typeof app;
