import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { MovieCreatedListener } from './listeners/movie-created.listener';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [PrismaModule],
  controllers: [MoviesController],
  providers: [MoviesService, MovieCreatedListener],
  exports: [MoviesService],
})
export class MoviesModule {}
