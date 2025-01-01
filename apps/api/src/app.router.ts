import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';

import { LogsRouter } from './modules/logs/logs.router';
import { MoviesRouter } from './modules/movies/movies.router';
import { TRPCService } from './modules/trpc/trpc.service';

export type AppRouterType = AppRouter['appRouter'];

@Injectable()
export class AppRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly moviesRouter: MoviesRouter,
    private readonly logsRouter: LogsRouter
  ) {}

  appRouter = this.trpc.router({
    movies: this.moviesRouter.router,
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
