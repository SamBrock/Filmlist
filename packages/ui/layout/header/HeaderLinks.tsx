'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@filmlist/lib/utils/cn';

export const HeaderLinks = ({ className, ...props }: React.ComponentProps<'ul'>) => {
  const pathname = usePathname();

  return (
    <ul className={cn('flex items-center gap-8 text-sm', className)} {...props}>
      <li className={cn(pathname.includes('/films') ? 'font-semibold' : 'text-secondary font-medium')}>
        <Link href="/films">Films</Link>
      </li>
      <li className={cn(pathname.includes('/watchlist') ? 'font-semibold' : 'text-secondary font-medium')}>
        <Link href="/watchlist">Watchlist</Link>
      </li>
    </ul>
  );
};
