import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { MovieDetailsEntity } from './entities/movie-details.entity';
import { MoviesService } from './movies.service';

@Controller('/v1/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':id')
  @ApiOkResponse({ type: MovieDetailsEntity })
  async getMovieById(@Param('id') id: number): Promise<MovieDetailsEntity> {
    const { data } = await this.moviesService.getMovie(id);
    return data;
  }
}
