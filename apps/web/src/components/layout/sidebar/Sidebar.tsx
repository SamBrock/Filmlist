import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { cn } from '@/lib/utils/cn';

import { SidebarLogo } from './SidebarLogo';

export const Sidebar = ({ className, ...props }: React.ComponentProps<'aside'>) => {
  return (
    <aside className={cn('bg-background fixed flex h-screen w-60 flex-col p-4', className)} {...props}>
      <SidebarLogo className="block" />

      <Input type="text" className="mt-12" />

      <Button size="sm" className="mt-auto w-full">
        Log a film
      </Button>
      <nav></nav>
    </aside>
  );
};
