import { z } from 'zod';

export type GetMovieInput = z.infer<typeof getMovieInput>;
export type GetMovieOutput = z.infer<typeof getMovieOutput>;
export type Movie = GetMovieOutput;

export const getMovieInput = z.object({
  movieId: z.number(),
});

export const getMovieOutput = z.object({
  title: z.string(),
  posterPath: z.string(),
  releaseDate: z.string(),
  backdropPath: z.string(),
  overview: z.string(),
  runtime: z.number(),
  tagline: z.string(),
  directors: z.array(z.string()),
  // voteAverage: z.number().optional(),
  // voteCount: z.number().optional(),
  // budget: z.number().optional(),
  // revenue: z.number().optional(),
  // status: z.string().optional(),
  // spokenLanguages: z.array(z.string()).optional(),
  // directors: z.array(z.string()).optional(),
  // genres: z.array(z.string()).optional(),
});
