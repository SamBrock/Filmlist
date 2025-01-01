import { z } from 'zod';

export type GetUserHabitsSchema = z.infer<typeof getUserHabitsSchema>;

export const getUserHabitsSchema = z.object({
  userId: z.number(),
});
