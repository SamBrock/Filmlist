import type { components, operations } from './schema-v3';

export * as tmdb from './client';

export type TMDbSchema = components['schemas'];
export type TMDBOperations = operations;

export type TMDbWatchProvider = {
  logo_path?: string;
  provider_id: number;
  provider_name?: string;
  display_priority: number;
};
