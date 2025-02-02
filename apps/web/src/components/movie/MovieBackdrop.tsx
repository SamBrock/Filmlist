import { backdropSrc } from '@/lib/utils/imageSrc';

type MovieBackdropImageProps = React.ComponentProps<'img'> & {
  backdropPath: string;
};

export const MovieBackdropImage = ({ backdropPath, ...props }: MovieBackdropImageProps) => {
  return <img src={backdropSrc(backdropPath, 'tmdb', 'original')} {...props} />;
};
