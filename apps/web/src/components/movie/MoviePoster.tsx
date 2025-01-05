import { TMDB_IMG_URL_POSTER } from '@/lib/constants/tmdb';

type SourceOptions =
  | {
      type: 'tmdb';
      sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
    }
  | {
      type: 'filmlist';
      sizes: ['w92', 'w500'];
    };

type Source = SourceOptions['type'];

type MoviePosterProps<T extends Source> = React.ComponentProps<'img'> & {
  source: T;
  size: Extract<SourceOptions, { type: T }>['sizes'][number];
  posterPath: string;
};

export const MoviePoster = <T extends Source>({ source, size, posterPath }: MoviePosterProps<T>) => {
  switch (source) {
    case 'tmdb':
      return <img src={`${TMDB_IMG_URL_POSTER}/${size}/${posterPath}`} />;
    case 'filmlist':
      return <img src={`${TMDB_IMG_URL_POSTER}/${size}/${posterPath}`} />;
  }
};
