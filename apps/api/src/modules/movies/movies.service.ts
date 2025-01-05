import { Injectable, NotFoundException } from '@nestjs/common';

import { client } from '@filmlist/tmdb';

import { PrismaService } from '../prisma/prisma.service';
import { SearchMoviesInput } from './schema/search-movies.schema';

@Injectable()
export class MoviesService {
  private tmdb = client;

  constructor(private readonly prisma: PrismaService) {}

  async getTMDbMovie(movieId: number) {
    const { data } = await this.tmdb.GET('/3/movie/{movie_id}', {
      params: {
        path: { movie_id: movieId },
      },
    });

    if (!data) {
      throw new NotFoundException('Movie not found');
    }

    return data;
  }

  async getTMDbMovieDirectors(movieId: number) {
    const { data } = await this.tmdb.GET('/3/movie/{movie_id}/credits', {
      params: {
        path: { movie_id: movieId },
      },
    });

    if (!data) {
      throw new NotFoundException('Movie not found');
    }

    const directors = data.crew?.filter((person) => person.job === 'Director');

    return directors?.map((director) => ({
      id: director.id,
      name: director.name,
    }));
  }

  async searchMovies(input: SearchMoviesInput) {
    const { data } = await this.tmdb.GET('/3/search/movie', {
      params: {
        query: {
          query: input.query,
          language: input.language,
          region: input.region,
          primary_release_year: input.primaryReleaseYear,
          year: input.year,
          page: input.page,
          include_adult: false,
        },
      },
    });

    const results = data?.results;

    if (!results || results.length === 0) {
      throw new NotFoundException('No movies found');
    }

    const filteredResults = results
      .filter((movie) => {
        if (movie.poster_path === null) return false;
        if (movie.backdrop_path === null) return false;
        if (movie.popularity < 2) return false;
        return true;
      })
      .slice(0, 5);

    const withDirectors = await Promise.all(
      filteredResults.map(async (movie) => {
        const directors = await this.getTMDbMovieDirectors(movie.id);
        return {
          id: movie.id,
          title: movie.title as string,
          posterPath: movie.poster_path as string,
          releaseDate: movie.release_date as string,
          directors,
        };
      })
    );

    return withDirectors;
  }

  async saveMovie(movieId: number) {
    const exists = await this.prisma.movie.findFirst({
      where: { id: movieId },
    });

    if (exists) {
      return exists;
    }

    const { data } = await this.tmdb.GET(`/3/movie/{movie_id}`, {
      params: { path: { movie_id: movieId } },
    });

    if (!data) {
      throw new NotFoundException('Movie not found');
    }

    return this.prisma.movie.create({
      data: {
        id: movieId,
        title: data.title as string,
        releaseDate: new Date(data.release_date as string),
        posterPath: data.poster_path as string,
        backdropPath: data.backdrop_path as string,
      },
    });
  }
}
