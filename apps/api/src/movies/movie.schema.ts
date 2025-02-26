import { z } from 'zod';

export const getMovieInput = z.object({
  movieId: z.number(),
});

export type GetMovieInput = z.infer<typeof getMovieInput>;

export const getMovieOutput = z.object({
  movieId: z.number(),
  title: z.string(),
  releaseDate: z.string(),
  posterPath: z.string(),
  backdropPath: z.string(),
  overview: z.string(),
  runtime: z.number(),
  tagline: z.string(),
  voteAverage: z.number().optional(),
  voteCount: z.number().optional(),
  directors: z.array(z.string()),
  genres: z.array(z.string()).optional(),
});

export type GetMovieOutput = z.infer<typeof getMovieOutput>;
export type Movie = z.infer<typeof getMovieOutput>;
