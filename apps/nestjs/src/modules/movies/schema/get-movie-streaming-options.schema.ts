import { z } from 'zod';

export type GetMovieStreamOptionsInput = z.infer<typeof getMovieStreamOptionsInput>;
export type GetMovieStreamOptionsOutput = z.infer<typeof getMovieStreamOptionsOutput>;
export type MovieStreamOption = z.infer<typeof getMovieStreamOptionsOutput>[number];

export const getMovieStreamOptionsInput = z.object({
  movieId: z.number(),
  countryCode: z.string(),
});

export const getMovieStreamOptionsOutput = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .array();
