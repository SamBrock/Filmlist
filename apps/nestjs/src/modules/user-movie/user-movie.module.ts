import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TRPCModule } from '../trpc/trpc.module';
import { UserMovieRouter } from './user-movie.router';
import { UserMovieService } from './user-movie.service';

@Module({
  imports: [TRPCModule, PrismaModule],
  controllers: [],
  providers: [UserMovieService, UserMovieRouter],
  exports: [UserMovieService, UserMovieRouter],
})
export class UserMovieModule {}
