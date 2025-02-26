import { initTRPC } from '@trpc/server';
import { z } from 'zod';

import { addToWatchlist, removeFromWatchlist } from './watchlist.service';

const t = initTRPC.create();

export const router = t.router({
  /* Mutations */

  addToWatchlist: t.procedure
    .input(z.object({ movieId: z.number(), userId: z.number() }))
    .mutation(async (opts) => {
      const { movieId, userId } = opts.input;
      return addToWatchlist(movieId, userId);
    }),

  removeFromWatchlist: t.procedure
    .input(z.object({ movieId: z.number(), userId: z.number() }))
    .mutation(async (opts) => {
      const { movieId, userId } = opts.input;
      return removeFromWatchlist(movieId, userId);
    }),
});
