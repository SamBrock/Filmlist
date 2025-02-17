import { Module } from '@nestjs/common';

import { TRPCService } from './trpc.service';

@Module({
  controllers: [],
  providers: [TRPCService],
  exports: [TRPCService],
})
export class TRPCModule {}
