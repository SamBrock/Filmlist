import { initTRPC } from '@trpc/server';

import * as activity from './activity/activity.router';
import * as movies from './movies/movie.router';
import * as watchlist from './watchlist/watchlist.router';

const t = initTRPC.context().create();

export const appRouter = t.router({
  activity: activity.router,
  movies: movies.router,
  watchlist: watchlist.router,
});

export type AppRouter = typeof appRouter;
