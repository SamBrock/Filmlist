import { Injectable } from '@nestjs/common';

import { client } from '@filmlist/tmdb/client';

@Injectable()
export class MoviesService {
  private tmdb = client;

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
    return this.tmdb.GET('/3/movie/latest');
  }
}
