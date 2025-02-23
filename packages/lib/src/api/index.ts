import createClient from 'openapi-fetch';

import type { paths } from './schema-api';

export const api = createClient<paths>({
  baseUrl: 'http://localhost:8787',
});
