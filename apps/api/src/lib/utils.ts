import * as HttpStatusCodes from 'http-status-codes';
import { Schema } from 'zod';

export const StatusCodes = HttpStatusCodes;

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
