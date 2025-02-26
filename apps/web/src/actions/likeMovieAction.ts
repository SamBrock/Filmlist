'use server';

import { LikeMovieInput } from '@filmlist/api/app.types';

import { trpc } from '@/lib/trpc';

export const likeMovieAction = async (payload: LikeMovieInput) => {
  await trpc.activity.likeMovie.mutate(payload);
};
