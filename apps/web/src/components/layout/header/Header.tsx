import { cn } from '@/lib/utils/cn';

import { HeaderLogo } from './HeaderLogo';
import { HeaderMovieSearch } from './HeaderMovieSearch';

export const Header = ({ className, ...props }: React.ComponentProps<'header'>) => {
  return (
    <header className={cn('flex w-full items-center px-8 py-4', className)} {...props}>
      <HeaderLogo />
      <HeaderMovieSearch />
    </header>
  );
};
