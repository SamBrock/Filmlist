import { relations } from 'drizzle-orm';
import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';

import { movies } from './movies.schema';
import { users } from './users.schema';

export const watched = pgTable('watched', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  movieId: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

export const watchedRelations = relations(watched, ({ one }) => ({
  user: one(users, { fields: [watched.userId], references: [users.id] }),
  movie: one(movies, { fields: [watched.movieId], references: [movies.id] }),
}));
