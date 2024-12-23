import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [PrismaModule],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
