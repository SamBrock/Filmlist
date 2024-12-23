import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ListsModule } from './modules/lists/lists.module';
import { LogsModule } from './modules/logs/logs.module';
import { MoviesModule } from './modules/movies/movies.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { WatchlistsModule } from './modules/watchlists/watchlists.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    PrismaModule,
    AuthModule,
    UsersModule,
    MoviesModule,
    ListsModule,
    WatchlistsModule,
    LogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
