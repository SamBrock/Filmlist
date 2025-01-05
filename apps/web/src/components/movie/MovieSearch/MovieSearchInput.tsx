'use client';

import { useRef } from 'react';

import { Icon } from '@/components/common/Icon';

import { useMovieSearchStore } from './MovieSearchProvider';

export const MovieSearchInput = () => {
  const setQuery = useMovieSearchStore((s) => s.setQuery);

  const timeoutRef = useRef<NodeJS.Timeout>();

  return (
    <div className="relative flex h-10 items-center">
      <Icon name="search" className="text-secondary absolute left-3 h-2 w-2" />

      <input
        className="bg-foreground placeholder:text-secondary ml-7 w-full rounded-lg px-4 py-2 text-sm focus:outline-none"
        placeholder="Search films"
        onChange={(e) => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() => {
            setQuery(e.target.value);
          }, 500);
        }}
      />
    </div>
  );
};
