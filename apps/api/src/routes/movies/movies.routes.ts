import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import { jsonContent } from '@filmlist/lib/hono';
import { StatusCodes } from '@filmlist/lib/utils';

import { getMovie, getMovieResponseSchema } from './get-movie.handler';

const router = new OpenAPIHono();

router.openapi(
  createRoute({
    path: '/getMovie/{movieId}',
    method: 'get',
    request: {
      params: z.object({
        movieId: z.string(),
      }),
    },
    responses: {
      [StatusCodes.OK]: jsonContent(getMovieResponseSchema, 'Get movie by TMDB ID'),
    },
  }),
  async (c) => {
    const { movieId } = c.req.param();
    const data = await getMovie(movieId);
    return c.json(data);
  }
);

export default router;
