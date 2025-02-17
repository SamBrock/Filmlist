import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TRPCModule } from '../trpc/trpc.module';
import { MoviesRouter } from './movies.router';
import { MoviesService } from './movies.service';

@Module({
  imports: [TRPCModule, PrismaModule],
  controllers: [],
  providers: [MoviesService, MoviesRouter],
  exports: [MoviesService, MoviesRouter],
})
export class MoviesModule {}
