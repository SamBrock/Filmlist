import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './modules/lists/lists.module';
import { MoviesModule } from './modules/movies/movies.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { WatchlistsModule } from './modules/watchlists/watchlists.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UsersModule, MoviesModule, ListsModule, WatchlistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
