import Link from 'next/link';

import { cn } from '@/lib/utils/cn';

import { HeaderLogo } from './HeaderLogo';
import { HeaderMovieSearch } from './HeaderMovieSearch';

export const Header = ({ className, ...props }: React.ComponentProps<'header'>) => {
  return (
    <header className={cn('bg-background sticky top-0 flex w-full items-center', className)} {...props}>
      <HeaderLogo />
      <HeaderMovieSearch />
    </header>
  );
};
