import { and, eq } from 'drizzle-orm';

import { db, watchlist } from '@filmlist/drizzle';

export const addToWatchlist = async (movieId: number, userId: number) => {
  await db.insert(watchlist).values({ movieId, userId });
};

export const removeFromWatchlist = async (movieId: number, userId: number) => {
  await db.delete(watchlist).where(and(eq(watchlist.movieId, movieId), eq(watchlist.userId, userId)));
};
