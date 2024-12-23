import createClient from 'openapi-fetch';

import type { paths } from './schema-v3';

export const client = createClient<paths>({
  baseUrl: 'https://api.themoviedb.org/',
  headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
});
