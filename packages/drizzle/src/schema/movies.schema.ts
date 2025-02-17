import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar, date, timestamp } from 'drizzle-orm/pg-core';

import { activity } from './activity.schema';

export const movies = pgTable('movies', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  tmdbId: integer().notNull().unique(),
  title: varchar({ length: 255 }).notNull(),
  backdropPath: varchar({ length: 255 }).notNull(),
  posterPath: varchar({ length: 255 }).notNull(),
  overview: varchar({ length: 255 }).notNull(),
  releaseDate: date().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const moviesRelations = relations(movies, ({ many }) => ({
  activity: many(activity),
}));
