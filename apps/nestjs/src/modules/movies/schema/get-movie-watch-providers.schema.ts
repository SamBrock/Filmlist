import { z } from 'zod';

export type GetMovieWhereToWatchInput = z.infer<typeof getMovieWhereToWatchInput>;
export type GetMovieWhereToWatchOutput = z.infer<typeof getMovieWhereToWatchOutput>;
export type WatchProvider = z.infer<typeof getMovieWhereToWatchOutput>['providers'][number];

export const getMovieWhereToWatchInput = z.object({
  movieId: z.number(),
  countryCode: z.string(),
});

export const getMovieWhereToWatchOutput = z.object({
  providers: z
    .object({
      id: z.string(),
      name: z.string(),
      options: z
        .object({
          type: z.enum(['flatrate', 'rent', 'buy']),
        })
        .array(),
    })
    .array(),
});

export type TMDbWatchProvider = {
  logo_path?: string;
  provider_id: number;
  provider_name?: string;
  display_priority: number;
};
