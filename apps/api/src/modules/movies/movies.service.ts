import { Injectable, NotFoundException } from '@nestjs/common';

import { client, TMDBOperations, TMDbWatchProvider } from '@filmlist/tmdb';

import { PrismaService } from '../prisma/prisma.service';
import {
  GetMovieStreamOptionsInput,
  GetMovieStreamOptionsOutput,
} from './schema/get-movie-streaming-options.schema';
import { GetMovieInput, GetMovieOutput } from './schema/get-movie.schema';
import { SearchMoviesInput } from './schema/search-movies.schema';

@Injectable()
export class MoviesService {
  private readonly tmdb = client;

  constructor(private readonly prisma: PrismaService) {}

  async getMovie({ movieId }: GetMovieInput): Promise<GetMovieOutput> {
    const { data } = await this.tmdb.GET('/3/movie/{movie_id}', {
      params: {
        path: { movie_id: movieId },
        query: {
          append_to_response: 'credits',
        },
      },
    });

    if (!data) {
      throw new NotFoundException('Movie not found');
    }
    if ([data.poster_path, data.backdrop_path, data.release_date].includes(undefined)) {
      throw new NotFoundException('Movie not found');
    }

    const credits = (
      data as unknown as {
        credits: TMDBOperations['movie-credits']['responses']['200']['content']['application/json']; // TODO
      }
    ).credits;

    return {
      title: data.title as string,
      posterPath: data.poster_path as string,
      releaseDate: data.release_date as string,
      backdropPath: data.backdrop_path as string,
      overview: data.overview as string,
      runtime: data.runtime as number,
      tagline: data.tagline as string,
      voteAverage: data.vote_average as number,
      voteCount: data.vote_count as number,
      directors: credits.crew
        ? credits.crew.filter((person) => person.job === 'Director').map((person) => person.name as string)
        : [],
      genres: data.genres ? data.genres?.map((genre) => genre.name as string) : [],
    };
  }

  async getMovieStreamingOptions({
    movieId,
    countryCode,
  }: GetMovieStreamOptionsInput): Promise<GetMovieStreamOptionsOutput> {
    const { data } = await this.tmdb.GET('/3/movie/{movie_id}/watch/providers', {
      params: {
        path: { movie_id: movieId },
      },
    });

    if (!data) {
      throw new NotFoundException('Movie not found');
    }

    const providers = data.results?.[countryCode as keyof typeof data.results];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const flatrate = providers?.flatrate as TMDbWatchProvider[];

    if (!flatrate) {
      return [];
    }

    return flatrate.map((provider) => ({
      id: provider.provider_id.toString(),
      name: provider.provider_name as string,
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
        const directors = await this.getMovie({ movieId: movie.id });
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
