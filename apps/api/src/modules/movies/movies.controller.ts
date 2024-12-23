import { Controller, Get } from '@nestjs/common';

import { MoviesService } from './movies.service';

@Controller('/v1/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('latest')
  async getLatest() {
    return this.moviesService.getLatest();
  }
}
