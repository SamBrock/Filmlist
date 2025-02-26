import { relations } from 'drizzle-orm';
import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';

import { movies } from './movies.schema';
import { users } from './users.schema';

export const ratings = pgTable('ratings', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  movieId: integer().notNull(),
  rating: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

export const ratingsRelations = relations(ratings, ({ one }) => ({
  user: one(users, { fields: [ratings.userId], references: [users.id] }),
  movie: one(movies, { fields: [ratings.movieId], references: [movies.id] }),
}));
