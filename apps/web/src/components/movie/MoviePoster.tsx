import { posterSrc } from '@/lib/images';

type MoviePosterProps = React.ComponentProps<'img'> & {
  posterPath: string;
};

export const MoviePoster = ({ posterPath, ...props }: MoviePosterProps) => {
  return <img src={posterSrc(posterPath, 'tmdb', 'w500')} {...props} />;
};
