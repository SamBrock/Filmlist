import { z } from 'zod';

export type LogUserMovieInput = z.infer<typeof logUserMovieInput>;

export const logUserMovieInput = z.object({
  userId: z.number(),
  movieId: z.number(),
  rating: z.number(),
  liked: z.boolean(),
});
