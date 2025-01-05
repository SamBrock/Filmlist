import { Icon } from '@/components/common/Icon';
import { Kbd } from '@/components/common/Kbd';
import { cn } from '@/lib/utils/cn';

export const HeaderSearch = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'bg-foreground border-border flex h-9 cursor-pointer items-center rounded-md border',
        className
      )}
      tabIndex={0}
      {...props}
    >
      <Icon name="search" className="text-secondary ml-3" />
      <div className="text-secondary ml-3 text-sm">Search films</div>
      <Kbd windows="Ctrl K" mac="⌘K" className="mr-3 ml-auto" />
    </div>
  );
};
