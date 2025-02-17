import { relations } from 'drizzle-orm';
import { integer, pgTable, timestamp, date, boolean } from 'drizzle-orm/pg-core';

import { movies } from './movies.schema';
import { users } from './users.schema';

export const activity = pgTable('activity', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  movieId: integer().notNull(),
  liked: boolean().default(false),
  rating: integer().default(0),
  date: date().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const activityRelations = relations(activity, ({ one }) => ({
  user: one(users, { fields: [activity.userId], references: [users.id] }),
  movie: one(movies, { fields: [activity.movieId], references: [movies.id] }),
}));
