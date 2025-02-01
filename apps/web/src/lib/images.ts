import { TMDB_IMAGE_BASE_URL } from './constants';

type PosterImageProvider = 'filmlist' | 'tmdb';

type PosterSize =
  | {
      provider: 'filmlist';
      size: 'w184' | 'w500';
    }
  | {
      provider: 'tmdb';
      size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
    };

export const posterSrc = <T extends PosterImageProvider>(
  posterPath: string,
  provider: T,
  size: Extract<PosterSize, { provider: T }>['size']
): string => {
  switch (provider) {
    case 'filmlist':
      return `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}`; // TODO
    case 'tmdb':
    default:
      return `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}`;
  }
};

type BackdropImageProvider = 'tmdb'; // Only using TMDB backdrop images for noe

type BackdropSize = {
  provider: 'tmdb';
  size: 'w300' | 'w780' | 'w1280' | 'original';
};

export const backdropSrc = <T extends BackdropImageProvider>(
  posterPath: string,
  provider: BackdropImageProvider,
  size: Extract<BackdropSize, { provider: T }>['size']
): string => {
  switch (provider) {
    case 'tmdb':
    default:
      return `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}`;
  }
};
