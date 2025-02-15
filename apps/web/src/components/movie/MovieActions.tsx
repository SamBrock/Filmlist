'use client';

import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/lib/dexie/db';
import { cn } from '@/lib/utils/cn';
import { useMovieContext } from '@/providers/MovieProvider';

type MovieActionsProps = React.ComponentProps<'div'>;

export const MovieActions = ({ className, ...props }: MovieActionsProps) => {
  return (
    <div className={cn('bg-bg-muted p-2', className)} {...props}>
      <LikeButton />
    </div>
  );
};

const LikeButton = () => {
  const { movie } = useMovieContext();

  const liked = useLiveQuery(() =>
    db.likedMovies.toArray().then((movies) => movies.some((m) => m.id === movie.movieId))
  );

  console.log('liked', liked);

  const addLike = async () => {
    if (liked) {
      await db.likedMovies.delete(movie.movieId);
    } else {
      await db.likedMovies.add({ id: movie.movieId });
    }
  };

  if (liked === undefined) {
    return null;
  }
  return <button onClick={addLike}>{liked ? 'Liked' : 'Like'}</button>;
};
