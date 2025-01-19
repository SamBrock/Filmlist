import { TMDB_MOVIE_POSTER_URL } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

type Source = 'filmlist' | 'tmdb';

type Size =
  | {
      source: 'filmlist';
      size: 'w184' | 'w500';
    }
  | {
      source: 'tmdb';
      size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
    };

type MoviePosterProps<T extends Source> = React.ComponentProps<'img'> & {
  source: T;
  size: Extract<Size, { source: T }>['size'];
  posterPath: string;
};

export const MoviePoster = <T extends Source>({
  source,
  size,
  posterPath,
  className,
  ...props
}: MoviePosterProps<T>) => {
  return (
    <img
      className={cn('aspect-[1/1.5]', className)}
      src={`${TMDB_MOVIE_POSTER_URL}/${size}/${posterPath}`}
      {...props}
    />
  );
};

// "backdrop_sizes": [
//   "w300",
//   "w780",
//   "w1280",
//   "original"
// ],
// "logo_sizes": [
//   "w45",
//   "w92",
//   "w154",
//   "w185",
//   "w300",
//   "w500",
//   "original"
// ],
// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ],
// "profile_sizes": [
//   "w45",
//   "w185",
//   "h632",
//   "original"
// ],
// "still_sizes": [
//   "w92",
//   "w185",
//   "w300",
//   "original"
// ]
