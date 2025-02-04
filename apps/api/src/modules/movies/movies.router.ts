import { Injectable } from '@nestjs/common';

import { TRPCService } from '../trpc/trpc.service';
import { MoviesService } from './movies.service';
import { getMovieWhereToWatchInput } from './schema/get-movie-watch-providers.schema';
import { getMovieInput } from './schema/get-movie.schema';
import { searchMoviesInput } from './schema/search-movies.schema';

@Injectable()
export class MoviesRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly moviesService: MoviesService
  ) {}

  router = this.trpc.router({
    movie: this.trpc.procedure.input(getMovieInput).query(async ({ input }) => {
      return await this.moviesService.getMovie(input);
    }),

    watchProviders: this.trpc.procedure.input(getMovieWhereToWatchInput).query(async ({ input }) => {
      return await this.moviesService.getMovieWatchProviders(input);
    }),

    search: this.trpc.procedure.input(searchMoviesInput).query(async ({ input }) => {
      return await this.moviesService.searchMovies(input);
    }),
  });
}
