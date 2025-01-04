import { cn } from '@/lib/utils/cn';

export const HeaderSearch = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('bg-foreground flex h-9 cursor-pointer items-center rounded-md px-4', className)}
      tabIndex={0}
      {...props}
    >
      <div className="text-sm text-white/40">Search films</div>
    </div>
  );
};
