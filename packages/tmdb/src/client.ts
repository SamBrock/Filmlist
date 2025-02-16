import * as dotenv from 'dotenv';
import createClient from 'openapi-fetch';

import type { paths } from './schema-v3';

dotenv.config();

export const client = createClient<paths>({
  baseUrl: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjMyYjEyYjdmOWFkZTI4YWU3MTg2NmY0Nzc3MDMzYSIsIm5iZiI6MTU2MjAxMTc3NC4zMTUsInN1YiI6IjVkMWE2ODdlY2E0ZjY3Nzg5NGQ2YTg3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-7uuzpYHOQEYJHDCimFUDNG89s5jePdEHbrNkxrQQfc`,
  },
});
