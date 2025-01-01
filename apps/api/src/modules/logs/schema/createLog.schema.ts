import { z } from 'zod';

export type CreateLogSchema = z.infer<typeof createLogSchema>;

export const createLogSchema = z.object({
  userId: z.number(),
  habitId: z.number(),
  date: z.string(),
  status: z.enum(['COMPLETED', 'SKIPPED', 'FAILED']),
});
