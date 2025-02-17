import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UserMovieLikeInput } from './schemas/user-movie-liked.schema';

@Injectable()
export class UserMovieService {
  constructor(private readonly prisma: PrismaService) {}

  async userMovieLike({ userId, movieId, liked }: UserMovieLikeInput) {
    if (liked) {
      await this.prisma.likedMovie.create({
        data: { userId, movieId },
      });
    } else {
      await this.prisma.likedMovie.delete({
        where: { userId_movieId: { userId, movieId } },
      });
    }
  }
}
