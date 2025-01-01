import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppRouter } from './app.router';
import { AppService } from './app.service';
import { LogsModule } from './modules/logs/logs.module';
import { MoviesModule } from './modules/movies/movies.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { TRPCModule } from './modules/trpc/trpc.module';

@Module({
  imports: [PrismaModule, TRPCModule, MoviesModule, LogsModule],
  controllers: [AppController],
  providers: [AppService, AppRouter],
})
export class AppModule {}
