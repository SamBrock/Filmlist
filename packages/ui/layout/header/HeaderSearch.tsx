'use client';

import { Icon } from '@/components/common/Icon';
import { useGlobalStore } from '@/providers/GlobalStoreProvider';

import { cn } from '../../../lib/utils/cn';

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
      <Icon name="search" className="text-secondary ml-3" />
      <div className="text-secondary ml-3 text-sm">Search films</div>
      {/* <Kbd windows="Ctrl K" mac="⌘K" className="mr-3 ml-auto" /> */}
    </div>
  );
};
