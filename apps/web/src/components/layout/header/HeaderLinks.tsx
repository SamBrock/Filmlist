import Link from 'next/link';

import { cn } from '@/lib/utils/cn';

export const HeaderLinks = ({ className, ...props }: React.ComponentProps<'ul'>) => {
  return (
    <ul className={cn('flex items-center gap-8', className)} {...props}>
      <li className="font-medium text-neutral-500">
        <Link href="/logs">Logs</Link>
      </li>
      <li className="font-medium text-neutral-500">
        <Link href="/films">Films</Link>
      </li>
      <li className="font-medium text-neutral-500">
        <Link href="/watchlist">Watchlist</Link>
      </li>
    </ul>
  );
};
