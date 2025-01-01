import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppRouter } from './app.router';
import { AppService } from './app.service';
import { HabitsModule } from './modules/habits/habits.module';
import { LogsModule } from './modules/logs/logs.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { TRPCModule } from './modules/trpc/trpc.module';

@Module({
  imports: [PrismaModule, TRPCModule, HabitsModule, LogsModule],
  controllers: [AppController],
  providers: [AppService, AppRouter],
})
export class AppModule {}
