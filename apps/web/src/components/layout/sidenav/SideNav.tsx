import { cn } from '@/lib/utils/cn';

export const SideNav = ({ className, ...props }: React.ComponentProps<'aside'>) => {
  return (
    <aside className={cn('bg-foreground h-full rounded-lg', className)} {...props}>
      <nav className=""></nav>
    </aside>
  );
};
