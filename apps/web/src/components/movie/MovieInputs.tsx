'use client';

import { cn } from '@/lib/utils/cn';

import { Icon } from '../common/Icon';
import { StarInput } from './StarInput';

type MovieRatingInputProps = React.ComponentProps<'div'> & {
  initialRating: number;
};

export const MovieRatingInput = ({ initialRating, className, ...props }: MovieRatingInputProps) => {
  return (
    <div
      className={cn(
        'bg-text/5 flex flex-col items-center justify-center rounded-sm px-4 pt-3 pb-1',
        className
      )}
      {...props}
    >
      <StarInput initialRating={initialRating} />
      <span className="text-text/50 my-1 inline-flex w-full justify-center text-xs">Rate</span>
    </div>
  );
};

export const MovieLikeInput = () => {
  return (
    <div
      className={cn(
        'bg-text/5 flex aspect-square flex-col items-center justify-center rounded px-4 pt-3 pb-1'
      )}
    >
      <Icon name="heart" className="stroke-text-secondary size-[1.8rem]" />
      <span className="text-text/50 my-1 inline-flex w-full justify-center text-xs">Like</span>
    </div>
  );
};

export const MovieWatchInput = () => {
  return (
    <div
      className={cn(
        'bg-text/5 flex aspect-square flex-col items-center justify-center rounded px-4 pt-3 pb-1'
      )}
    >
      <Icon name="eye" className="stroke-text-secondary size-[1.8rem]" />
      <span className="text-text/50 my-1 inline-flex w-full justify-center text-xs">Watch</span>
    </div>
  );
};

export const MovieWatchlistInput = () => {
  return (
    <div
      className={cn(
        'bg-text/5 flex aspect-square flex-col items-center justify-center rounded px-4 pt-3 pb-1'
      )}
    >
      <Icon name="plus" className="fill-text-secondary stroke-text-secondary size-[1.8rem]" />
      <span className="text-text/50 my-1 inline-flex w-full justify-center text-xs">Watchlist</span>
    </div>
  );
};
