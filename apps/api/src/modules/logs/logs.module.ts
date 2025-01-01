import { Module } from '@nestjs/common';

import { MoviesModule } from '../movies/movies.module';
import { PrismaModule } from '../prisma/prisma.module';
import { TRPCModule } from '../trpc/trpc.module';
import { LogsRouter } from './logs.router';
import { LogsService } from './logs.service';

@Module({
  imports: [TRPCModule, PrismaModule, MoviesModule],
  controllers: [],
  providers: [LogsService, LogsRouter],
  exports: [LogsService, LogsRouter],
})
export class LogsModule {}
