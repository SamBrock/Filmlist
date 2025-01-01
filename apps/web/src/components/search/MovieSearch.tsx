'use client';

import { useRef, useState } from 'react';
import useSWR from 'swr';

import { logUserMovieAction } from '@/actions/logUserMovieAction';
import { trpc } from '@/lib/trpc';

export const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data } = useSWR(['search', searchTerm], () => trpc.movies.search.query({ query: searchTerm }));

  const timeoutRef = useRef<NodeJS.Timeout>();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setSearchTerm(e.target.value);
          }, 500);
        }}
      />

      {data &&
        data?.map((d) => (
          <div
            key={d.id}
            className="bg-neutral-100/5 px-2"
            onClick={() =>
              logUserMovieAction({
                movieId: d.id,
                userId: 1,
                rating: 5,
                liked: true,
              })
            }
          >
            {d.title}
          </div>
        ))}
    </div>
  );
};
