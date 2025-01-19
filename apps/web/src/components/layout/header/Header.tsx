import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { cn } from '@/lib/utils/cn';

import { HeaderLogo } from './HeaderLogo';

export const Header = ({ className, ...props }: React.ComponentProps<'header'>) => {
  return (
    <header className={cn('flex items-center px-8 py-4', className)} {...props}>
      <HeaderLogo />
      <Input
        className="bg-foreground ml-6 !h-10 w-[600px] !rounded-full !text-base"
        placeholder="Search films"
      />
    </header>
  );
};
