'use client';

import { type LucideProps } from 'lucide-react';
import { useState } from 'react';

import { Icon } from '@/components/common/Icon';
import { cn } from '@/lib/utils/cn';
import { useMovieContext } from '@/providers/MovieProvider';

const MAX_RATING = 5;
// const STAR_SIZE = 36; // tailwind size-9

type MovieStarsInputProps = {
  initialRating: number;
};

export const StarInput = ({ initialRating }: MovieStarsInputProps) => {
  const [rating, setRating] = useState(initialRating);

  const { colors } = useMovieContext();

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect(); // TODO: use ref
        const x = e.clientX - rect.left;
        const rating = Math.round((x / rect.width) * MAX_RATING * 2) / 2;
        setRating(rating);
      }}
    >
      <div className="flex items-center">
        {[...Array(MAX_RATING).keys()].map((i) => (
          <Star
            key={i}
            style={{
              fill: colors.hslSecondary,
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-0 left-0 flex items-center"
        style={{
          clipPath: `inset(0 ${100 - (rating / MAX_RATING) * 100}% 0 0)`,
        }}
      >
        {[...Array(MAX_RATING).keys()].map((i) => (
          <Star
            key={i}
            style={{
              fill: colors.hslPrimary,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Star = ({ className, ...props }: LucideProps) => {
  return <Icon className={cn('size-[2.2rem] stroke-0', className)} {...props} name="star" />;
};
