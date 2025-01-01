import { Injectable } from '@nestjs/common';

import { TRPCService } from '../trpc/trpc.service';
import { LogsService } from './logs.service';
import { findUserLogsInput } from './schema/find-user-logs.schema';
import { logUserMovieInput } from './schema/log-user-movie.schema';

@Injectable()
export class LogsRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly logsService: LogsService
  ) {}

  router = this.trpc.router({
    findUserLogs: this.trpc.procedure
      .input(findUserLogsInput)
      .query(({ input }) => this.logsService.findUserLogs(input)),
    logUserMovie: this.trpc.procedure
      .input(logUserMovieInput)
      .query(({ input }) => this.logsService.logUserMovie(input)),
  });
}
