import { Injectable } from '@nestjs/common';

import { MoviesService } from '../movies/movies.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LogsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly moviesService: MoviesService
  ) {}

  findUserLogs(userId: number) {
    return this.prisma.log.findMany({
      where: {
        userId,
      },
    });
  }

  async createLog(createLogDto: CreateLogDto, userId: number) {
    const exists = await this.moviesService.checkMovieExists(createLogDto.movieId);
    if (!exists) {
      await this.moviesService.saveMovie(createLogDto.movieId);
    }

    await this.prisma.log.create({
      data: {
        userId,
        movieId: createLogDto.movieId,
        liked: createLogDto.liked,
        rating: createLogDto.rating,
      },
    });
  }
}
