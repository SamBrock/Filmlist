import { TMDB_MOVIE_BACKDROP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

type Source = 'filmlist' | 'tmdb';

type MoviePosterProps<T extends Source> = React.ComponentProps<'img'> & {
  source: T;
  backdropPath: string;
};

export const MovieBackdrop = <T extends Source>({
  source,
  backdropPath,
  className,
  ...props
}: MoviePosterProps<T>) => {
  return (
    <img className={cn(className)} src={`${TMDB_MOVIE_BACKDROP_URL}/original/${backdropPath}`} {...props} />
  );
};
