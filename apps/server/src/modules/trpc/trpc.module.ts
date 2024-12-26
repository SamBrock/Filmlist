import { Module } from '@nestjs/common';
import { TRPCService } from './trpc.service';
import { TRPCRouter } from './trpc.router';

@Module({
  imports: [],
  controllers: [],
  providers: [TRPCService, TRPCRouter],
})
export class TRPCModule {}
