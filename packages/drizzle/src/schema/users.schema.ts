import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

import { likes } from './likes.schema';
import { ratings } from './ratings.schema';
import { watched } from './watched.schema';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  likes: many(likes),
  ratings: many(ratings),
  watched: many(watched),
}));

// export const userActivityView = pgView('user_activity_view').as((qb) =>
//   qb
//     .select({
//       userId: users.id,
//       movieId: movies.id,
//     })
//     .from(users)
//     .groupBy(movies.id)
//     // .innerJoin(likes, eq(users.id, likes.userId))
//     // .innerJoin(ratings, eq(users.id, ratings.userId))
// );

// {
//   userId: integer(),
//   movieId: integer(),
//   watched: boolean(),
//   liked: boolean(),
//   rating: integer(),
// }
