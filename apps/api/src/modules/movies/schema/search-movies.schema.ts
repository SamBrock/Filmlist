import { z } from 'zod';

export type SearchMoviesInput = z.infer<typeof searchMoviesInput>;

export const searchMoviesInput = z.object({
  query: z.string(),
  language: z.string().optional(),
  primaryReleaseYear: z.string().optional(),
  year: z.string().optional(),
  page: z.number().optional(),
  region: z.string().optional(),
});
