import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TRPCModule } from '../trpc/trpc.module';
import { LogsRouter } from './logs.router';
import { LogsService } from './logs.service';

@Module({
  imports: [PrismaModule, TRPCModule],
  controllers: [],
  providers: [LogsService, LogsRouter],
  exports: [LogsRouter],
})
export class LogsModule {}
