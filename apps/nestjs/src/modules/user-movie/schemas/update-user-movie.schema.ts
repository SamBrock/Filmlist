import { z } from 'zod';

export type UpdateUserMovieInput = z.infer<typeof updateUserMovieInput>;

export const updateUserMovieInput = z.object({
  userId: z.number(),
  movieId: z.number(),
  watched: z.boolean().optional(),
  rating: z.number().max(10).optional(),
  liked: z.boolean().optional(),
});
