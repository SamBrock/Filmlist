import { Injectable } from '@nestjs/common';

import { AuthUser } from '../auth/user.decorator';
import { MoviesService } from '../movies/movies.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LogsService {
  constructor(
    private readonly prisma: PrismaService
    // private readonly moviesService: MoviesService
  ) {}

  findUserLogs(userId: number) {
    return this.prisma.log.findMany({
      where: {
        userId,
      },
    });
  }

  async createUserLog(logDto: CreateLogDto, user: AuthUser) {
    // await this.moviesService.saveMovie(logDto.movieId);

    return this.prisma.log.create({
      data: {
        userId: user.userId,
        movieId: logDto.movieId,
        liked: logDto.liked,
        rating: logDto.rating,
      },
    });
  }
}
