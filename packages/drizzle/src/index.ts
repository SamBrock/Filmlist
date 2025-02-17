import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

import { activity } from './schema/activity.schema';
import { movies } from './schema/movies.schema';
import { users } from './schema/users.schema';

export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  casing: 'snake_case',
  schema: {
    users,
    movies,
    activity,
  },
});
