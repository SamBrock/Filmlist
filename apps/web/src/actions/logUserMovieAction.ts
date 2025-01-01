'use server';

import { trpc } from '@/lib/trpc';
import { LogUserMovieInput } from '@filmlist/api/app.schemas';

export const logUserMovieAction = async (input: LogUserMovieInput) => {
  const data = await trpc.logs.logUserMovie.query(input);
};
