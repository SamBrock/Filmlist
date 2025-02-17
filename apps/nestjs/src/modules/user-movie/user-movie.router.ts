import { Injectable } from '@nestjs/common';

import { TRPCService } from '../trpc/trpc.service';
import { userMovieLikeInput } from './schemas/user-movie-liked.schema';
import { UserMovieService } from './user-movie.service';

@Injectable()
export class UserMovieRouter {
  constructor(
    private readonly trpc: TRPCService,
    private readonly userMovieService: UserMovieService
  ) {}

  router = this.trpc.router({
    userMovieLike: this.trpc.procedure.input(userMovieLikeInput).query(async ({ input }) => {
      return await this.userMovieService.userMovieLike(input);
    }),
  });
}
