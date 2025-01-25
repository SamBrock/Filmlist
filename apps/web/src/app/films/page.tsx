import { MovieGrid } from '@/components/movie/MovieGrid';
import { MovieItem } from '@/components/movie/MovieItem';
import { trpc } from '@/lib/trpc';

export default async function LogsPage() {
  const logs = await trpc.logs.findUserLogs.query({ userId: 1 });

  return (
    <div className="mx-auto w-[1084px] py-12">
      <MovieGrid>
        {logs.map((log) => (
          <MovieItem key={log.id} movie={log.movie} />
        ))}
      </MovieGrid>
    </div>
  );
}
