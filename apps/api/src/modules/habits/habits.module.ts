import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TRPCModule } from '../trpc/trpc.module';
import { HabitsRouter } from './habits.router';
import { HabitsService } from './habits.service';

@Module({
  imports: [TRPCModule, PrismaModule],
  controllers: [],
  providers: [HabitsService, HabitsRouter],
  exports: [HabitsService, HabitsRouter],
})
export class HabitsModule {}
