import Link from 'next/link';

import { MovieGrid } from '@/components/movie-list/MovieGrid';
import { MovieItem } from '@/components/movie-list/MovieItem';
import { trpc } from '@/lib/trpc';

export default async function LogsPage() {
  const logs = await trpc.logs.findUserLogs.query({ userId: 1 });

  return (
    <div className="mx-auto w-[1084px] py-12">
      <MovieGrid>
        {logs.map((log) => (
          <Link
            key={log.id}
            href={`/film/${log.movie!.id}-${log.movie!.title.replace(/ /g, '-')}`.toLowerCase()}
          >
            <MovieItem movie={log.movie} />
          </Link>
        ))}
      </MovieGrid>
    </div>
  );
}
