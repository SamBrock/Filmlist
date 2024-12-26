'use server';

import { ApiSchema, client } from '@filmlist/lib/api';

export const createLogAction = async (payload: ApiSchema['CreateLogDto']) => {
  const { data } = await client.POST('/v1/logs/createLog', {
    body: payload,
  });
  return {};
};
