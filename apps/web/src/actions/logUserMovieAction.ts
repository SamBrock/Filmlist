'use server';

import { LogUserMovieInput } from '@filmlist/api/app.schemas';

import { trpc } from '../lib/trpc';

export const logUserMovieAction = async (input: LogUserMovieInput) => {
  const data = await trpc.logs.logUserMovie.query(input);
};
