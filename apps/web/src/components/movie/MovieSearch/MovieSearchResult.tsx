import { trpc } from '@/lib/trpc';

type MovieSearchResultProps = React.ComponentProps<'div'> & {
  movie: Awaited<ReturnType<typeof trpc.movies.search.query>>[number];
};

export const MovieSearchResult = ({ movie }: MovieSearchResultProps) => {
  return (
    <div className="flex w-full cursor-pointer items-center rounded-md px-4 py-1 hover:bg-white/5">
      <div className="aspect-[1/1.5] h-full w-10 rounded-xs bg-white/10"></div>
      <div className="ml-4">{movie.title}</div>
    </div>
  );
};
