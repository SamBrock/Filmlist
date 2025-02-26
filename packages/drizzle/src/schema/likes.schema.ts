import { relations } from 'drizzle-orm';
import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';

import { movies } from './movies.schema';
import { users } from './users.schema';

export const likes = pgTable('likes', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  movieId: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});

export const likesRelations = relations(likes, ({ one }) => ({
  user: one(users, { fields: [likes.userId], references: [users.id] }),
  movie: one(movies, { fields: [likes.movieId], references: [movies.id] }),
}));
