import { Injectable } from '@nestjs/common';

import { TRPCService } from '../trpc/trpc.service';
import { MoviesService } from './movies.service';
import { searchMoviesInput } from './schema/search-movies.schema';

@Injectable()
export class MoviesRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly moviesService: MoviesService
  ) {}

  router = this.trpc.router({
    search: this.trpc.procedure.input(searchMoviesInput).query(async ({ input }) => {
      return await this.moviesService.searchMovies(input);
    }),
  });
}
