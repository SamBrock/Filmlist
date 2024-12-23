import createClient from 'openapi-fetch';

import type { paths, components } from './api-schema-v1';

export type ApiSchema = components['schemas'];

export const client = createClient<paths>({
  baseUrl: 'http://localhost:3001',
});
