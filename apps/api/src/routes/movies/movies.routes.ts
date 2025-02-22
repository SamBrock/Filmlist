import { createRoute } from '@hono/zod-openapi';

import { jsonContent, StatusCodes } from '../../lib/utils';
import { getMovieSchema } from './get-movie.handler';

export type GetMovieRoute = typeof getMovie;

export const getMovie = createRoute({
  path: '/movie/{movieId}',
  method: 'get',
  responses: {
    [StatusCodes.OK]: jsonContent(getMovieSchema, 'List of movies'),
  },
});
