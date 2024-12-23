import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
  imports: [PrismaModule],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
