import { Injectable } from '@nestjs/common';

import { client } from '@filmlist/tmdb/client';

@Injectable()
export class MoviesService {
  private tmdb = client;

  async getLatest() {
    return client.GET('/3/movie/latest');
  }
}
