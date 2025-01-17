import { trpc } from '@/lib/trpc';

export default async function LogsPage() {
  const logs = await trpc.logs.findUserLogs.query({ userId: 1 });

  return (
    <div className="debug ml-60">
      {logs.map((log) => (
        <div></div>
      ))}
    </div>
  );
}
