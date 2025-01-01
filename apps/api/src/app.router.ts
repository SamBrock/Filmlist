import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';

import { HabitsRouter } from './modules/habits/habits.router';
import { LogsRouter } from './modules/logs/logs.router';
import { TRPCService } from './modules/trpc/trpc.service';

export type AppRouterType = AppRouter['appRouter'];

@Injectable()
export class AppRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly habitsRouter: HabitsRouter,
    private readonly logsRouter: LogsRouter
  ) {}

  appRouter = this.trpc.router({
    habits: this.habitsRouter.router,
    logs: this.logsRouter.router,
  });

  applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      })
    );
  }
}
