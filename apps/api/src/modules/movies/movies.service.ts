import { Injectable } from '@nestjs/common';

import { client } from '@filmlist/tmdb';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  private tmdb = client;

  constructor(private readonly prisma: PrismaService) {}

  checkMovieExists(movieId: number) {
    return this.prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
  }

  async saveMovie(movieId: number) {
    const { data } = await this.tmdb.GET('/3/movie/{movie_id}', {
      params: {
        path: { movie_id: movieId },
      },
    });

    const saved = this.prisma.movie.create({
      data: {
        id: data.id,
        title: data.title,
        backdropPath: data.backdrop_path,
        posterPath: data.poster_path,
        releaseDate: new Date(data.release_date),
      },
    });

    // Event to save images

    return saved;
  }
}
