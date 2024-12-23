'use server';

import { ApiSchema, client } from '@filmlist/lib/api/client';

export const createLogAction = async (payload: ApiSchema['CreateLogDto']) => {
  const { data } = await client.POST('/v1/{username}/logs', {
    params: {
      path: {
        username: 'sambrock',
      },
    },
    body: payload,
  });

  return {};
};
