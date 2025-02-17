import Link from 'next/link';

// import { trpc } from '@/lib/trpc';
import { cn } from '@/lib/utils/cn';

import { MoviePoster } from '../movie/MoviePoster';

type MovieSearchResultProps = React.ComponentProps<'div'> & {
  // movie: Awaited<ReturnType<typeof trpc.movies.search.query>>[number];
};

export const MovieSearchResult = ({ className, ...props }: MovieSearchResultProps) => {
  return <div></div>;
};
