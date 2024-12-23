import { ApiProperty } from '@nestjs/swagger';

import { GenreEntity } from './genre.entity';

export class MovieDetailsEntity {
  @ApiProperty()
  adult: boolean;

  @ApiProperty()
  backdrop_path?: string;

  @ApiProperty()
  belongs_to_collection?: unknown;

  @ApiProperty()
  budget: number;

  @ApiProperty({ type: GenreEntity, isArray: true })
  genres?: GenreEntity[];

  @ApiProperty()
  homepage?: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  imdb_id?: string;

  @ApiProperty()
  original_language?: string;

  @ApiProperty()
  original_title?: string;

  @ApiProperty()
  overview?: string;

  @ApiProperty()
  popularity: number;

  @ApiProperty()
  poster_path?: string;

  @ApiProperty()
  release_date?: string;

  @ApiProperty()
  revenue: number;

  @ApiProperty()
  runtime: number;

  @ApiProperty()
  status?: string;

  @ApiProperty()
  tagline?: string;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  video: boolean;

  @ApiProperty()
  vote_average: number;

  @ApiProperty()
  vote_count: number;

  @ApiProperty()
  production_companies?: any;

  @ApiProperty()
  production_countries?: any;

  @ApiProperty()
  spoken_languages?: any;
}

// interface BelongsToCollection {
//   id: number;
//   name: string;
//   poster_path: string;s
//   backdrop_path: string;
// }

// interface ProductionCompany {
//   id: number;
//   logo_path?: string;
//   name?: string;
//   origin_country?: string;
// }

// interface ProductionCountry {
//   iso_3166_1?: string;
//   name?: string;
// }

// interface SpokenLanguage {
//   english_name?: string;
//   iso_639_1?: string;
//   name?: string;
// }
