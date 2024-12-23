import { Module } from '@nestjs/common';

import { MoviesModule } from '../movies/movies.module';
import { PrismaModule } from '../prisma/prisma.module';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';

@Module({
  imports: [PrismaModule, MoviesModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
