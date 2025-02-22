import { OpenAPIHono } from '@hono/zod-openapi';

import { getMovie } from './get-movie.handler';
import * as routes from './movies.routes';

const app = new OpenAPIHono();

const router = app.openapi(routes.getMovie, getMovie);

export default router;
