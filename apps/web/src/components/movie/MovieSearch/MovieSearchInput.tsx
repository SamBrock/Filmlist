'use client';

import { useRef } from 'react';

import { useMovieSearchStore } from './MovieSearchProvider';

export const MovieSearchInput = () => {
  const setQuery = useMovieSearchStore((s) => s.setQuery);

  const timeoutRef = useRef<NodeJS.Timeout>();

  return (
    <input
      className="bg-foreground w-full rounded-lg px-4 py-2 focus:outline-none"
      placeholder="Search movies..."
      onChange={(e) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setQuery(e.target.value);
        }, 500);
      }}
    />
  );
};
