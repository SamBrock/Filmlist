// 'use client';

// import { useState, useTransition } from 'react';

// import type { UserMovieActivity } from '@filmlist/api/app.types';
// import { likeMovieAction } from '@/actions/likeMovieAction';
// import { cn } from '@/lib/utils/cn';
// import { useMovieContext } from '@/providers/MovieProvider';

// type MovieActionsProps = React.ComponentProps<'div'> & {
//   initialActivity: UserMovieActivity;
// };

// export const MovieActions = ({ initialActivity, className, ...props }: MovieActionsProps) => {
//   return (
//     <div className={cn('bg-bg-muted p-2', className)} {...props}>
//       <LikeButton initialLiked={initialActivity.liked} />
//     </div>
//   );
// };

// const LikeButton = ({ initialLiked }: { initialLiked: boolean }) => {
//   const [liked, setLiked] = useState(initialLiked || false);

//   const { movie } = useMovieContext();
//   const [transitionPending, startTransition] = useTransition();

//   const handleClick = () => {
//     startTransition(() => {
//       setLiked((prev) => !prev);
//       likeMovieAction({ movieId: movie.movieId, userId: 1 });
//     });
//   };

//   return <button onClick={handleClick}>{liked ? 'Liked' : 'Like'}</button>;
// };
