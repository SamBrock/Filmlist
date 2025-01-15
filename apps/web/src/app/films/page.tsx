import { trpc } from '@filmlist/lib/trpc';

export default async function LogsPage() {
  const logs = await trpc.logs.findUserLogs.query({ userId: 1 });

  return <div>Logs: {logs.length}</div>;
}
