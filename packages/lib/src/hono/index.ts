import { type Schema } from 'zod';

export const jsonContent = <S extends Schema>(schema: S, description = '') => {
  return {
    content: {
      'application/json': {
        schema,
      },
    },
    description,
  };
};
