import { z } from 'zod';

export type FindUserLogs = z.infer<typeof findUserLogs>;

export const findUserLogs = z.object({
  userId: z.number(),
});
