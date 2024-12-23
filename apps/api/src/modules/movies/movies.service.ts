import { Injectable } from '@nestjs/common';

import { client } from '@filmlist/lib/tmdb/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  private tmdb = client;

  constructor(private readonly prisma: PrismaService) {}

  getMovie(id: number) {
    return this.tmdb.GET('/3/movie/{movie_id}', {
      params: {
        path: {
          movie_id: id,
        },
      },
    });
  }

  getLatest() {
    // return this.tmdb.GET('/3/movie/latest');
  }

  async saveMovie(movieId: number) {
    // const exists = await this.prisma.movie.findUnique({
    //   where: {
    //     id: movieId,
    //   },
    // });
    // if (exists) {
    //   return exists;
    // }
    // const movie = await this.tmdb.GET('/3/movie/{movie_id}', {
    //   params: {
    //     path: { movie_id: movieId },
    //   },
    // });
    // const saved = await this.prisma.movie.create({
    //   data: {
    //     id: movie.data.id,
    //     title: movie.data.title,
    //   },
    // });
    // // Event to save poster and backdrop images
    // return saved;
  }
}
