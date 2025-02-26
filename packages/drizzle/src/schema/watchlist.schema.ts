import { relations } from 'drizzle-orm';
import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';

import { movies } from './movies.schema';
import { users } from './users.schema';

export const watchlist = pgTable('watchlist', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  movieId: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

export const watchlistRelations = relations(watchlist, ({ one }) => ({
  user: one(users, { fields: [watchlist.userId], references: [users.id] }),
  movie: one(movies, { fields: [watchlist.movieId], references: [movies.id] }),
}));
