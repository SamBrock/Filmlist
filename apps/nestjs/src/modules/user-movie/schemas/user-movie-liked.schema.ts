import { z } from 'zod';

export type UserMovieLikeInput = z.infer<typeof userMovieLikeInput>;

export const userMovieLikeInput = z.object({
  userId: z.number(),
  movieId: z.number(),
  liked: z.boolean(),
});
