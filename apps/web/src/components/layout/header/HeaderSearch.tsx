'use client';

import { cn } from '@/lib/utils/cn';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';

export const HeaderSearch = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const openSearchModal = useGlobalStore((s) => s.openSearchModal);

  return (
    <div
      className={cn(
        'bg-foreground border-border flex h-9 cursor-pointer items-center rounded-md border',
        className
      )}
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        openSearchModal();
        console.log('OPENING');
      }}
      {...props}
    >
      <div className="text-secondary ml-3 text-sm">Search films</div>
    </div>
  );
};
