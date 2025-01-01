import { Injectable } from '@nestjs/common';

import { TRPCService } from '../trpc/trpc.service';
import { LogsService } from './logs.service';
import { createLogSchema } from './schema/createLog.schema';

@Injectable()
export class LogsRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly logsService: LogsService
  ) {}

  public router = this.trpc.router({
    createLog: this.trpc.procedure.input(createLogSchema).mutation(({ input }) => {
      return this.logsService.createLog(input);
    }),
  });
}
