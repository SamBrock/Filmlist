import { trpc } from '@/lib/trpc';

export default async function LogsPage() {
  const logs = await trpc.logs.findUserLogs.query({ userId: 1 });

  return (
    <div>
      {logs.map((l) => (
        <div key={l.id}>{l.movie!.title}</div>
      ))}
    </div>
  );
}
