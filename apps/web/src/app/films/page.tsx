import { MovieGrid } from '@/components/movie/MovieGrid';
import { MovieItem } from '@/components/movie/MovieItem/MovieItem';
import { trpc } from '@/lib/trpc';

export default async function LogsPage() {
  const logs = await trpc.logs.findUserLogs.query({ userId: 1 });

  return (
    <MovieGrid className="mx-auto mt-8 w-[1024px]">
      {logs.map((l) => (
        <MovieItem key={l.id} movie={l.movie} />
      ))}
    </MovieGrid>
  );
}
