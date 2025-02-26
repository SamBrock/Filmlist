import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { likes } from './schema/likes.schema';
import { movies } from './schema/movies.schema';
import { ratings } from './schema/ratings.schema';
import { users } from './schema/users.schema';
import { watched } from './schema/watched.schema';
import { watchlist } from './schema/watchlist.schema';

export { users, movies, likes, ratings, watched, watchlist };

export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  schema: {
    users,
    movies,
    likes,
    ratings,
    watched,
    watchlist,
  },
});
