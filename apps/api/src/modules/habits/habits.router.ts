import { Injectable } from '@nestjs/common';

import { TRPCService } from '../trpc/trpc.service';
import { HabitsService } from './habits.service';
import { getUserHabitsSchema } from './schema/getUserHabits.schema';

@Injectable()
export class HabitsRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly habitsService: HabitsService
  ) {}

  public router = this.trpc.router({
    getUserHabits: this.trpc.procedure.input(getUserHabitsSchema).query(({ input }) => {
      return this.habitsService.getUserHabits(input);
    }),
  });
}
