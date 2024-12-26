import { Injectable } from '@nestjs/common';

import { client } from '@filmlist/tmdb';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  private tmdb = client;

  constructor(private readonly prisma: PrismaService) {}

  async findOrSaveMovie(movieId: number) {
    const exists = await this.prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (exists) {
      return exists;
    }

    console.log('FINDING', movieId);

    const { data, response } = await this.tmdb.GET('/3/movie/{movie_id}', {
      params: {
        path: { movie_id: movieId },
      },
    });
    console.log('found', data, response);

    const saved = this.prisma.movie.create({
      data: {
        id: data.id,
        title: data.title,
        backdropPath: data.backdrop_path,
        posterPath: data.poster_path,
        releaseDate: new Date(data.release_date),
      },
    });

    // Save images

    return saved;
  }
}
