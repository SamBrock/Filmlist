import { Injectable } from '@nestjs/common';

import { MoviesService } from '../movies/movies.service';
import { PrismaService } from '../prisma/prisma.service';
import { FindUserLogsInput } from './schema/find-user-logs.schema';
import { LogUserMovieInput } from './schema/log-user-movie.schema';

@Injectable()
export class LogsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly moviesService: MoviesService
  ) {}

  findUserLogs(input: FindUserLogsInput) {
    return this.prisma.log.findMany({
      where: {
        userId: input.userId,
      },
      include: {
        movie: true,
      },
    });
  }

  async logUserMovie(input: LogUserMovieInput) {
    await this.moviesService.saveMovie(input.movieId);

    return this.prisma.log.create({
      data: {
        userId: input.userId,
        movieId: input.movieId,
        rating: input.rating,
        liked: input.liked,
      },
    });
  }
}
