import { z } from 'zod';

export type SearchMoviesInput = z.infer<typeof searchMoviesInput>;
export type SearchMoviesOutput = z.infer<typeof searchMoviesOutput>;

export const searchMoviesInput = z.object({
  query: z.string(),
  language: z.string().optional(),
  primaryReleaseYear: z.string().optional(),
  year: z.string().optional(),
  page: z.number().optional(),
  region: z.string().optional(),
});

export const searchMoviesOutput = z
  .object({
    title: z.string(),
    posterPath: z.string().optional(),
    releaseDate: z.string().optional(),
    directors: z.array(z.string()).optional(),
  })
  .array();
