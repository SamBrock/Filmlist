import { z } from 'zod';

export type FindUserLogsInput = z.infer<typeof findUserLogsInput>;

export const findUserLogsInput = z.object({
  userId: z.number(),
});
