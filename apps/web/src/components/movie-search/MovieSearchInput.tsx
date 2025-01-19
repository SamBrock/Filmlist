'use client';

import { useRef } from 'react';

import { Icon } from '@/components/common/Icon';
import { Input } from '@/components/common/Input';
import { cn } from '@/lib/utils/cn';

import { useMovieSearchContext } from './MovieSearchProvider';

export const MovieSearchInput = ({ className, ...props }: React.ComponentProps<'input'>) => {
  const setQuery = useMovieSearchContext((context) => context.setQuery);

  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setQuery(e.target.value), 300);
  };

  return (
    <div className="relative w-full">
      <Icon
        name="search"
        className="stroke-secondary h-icon w-icon absolute top-1/2 left-3 -translate-y-1/2"
      />
      <Input
        className={cn('bg-foreground !h-10 w-full !rounded-full pl-11 !text-sm', className)}
        placeholder="Search films"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
