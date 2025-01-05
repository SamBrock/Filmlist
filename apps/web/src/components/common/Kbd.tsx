import { headers } from 'next/headers';

import { cn } from '@/lib/utils/cn';

type KbdProps = React.ComponentProps<'kbd'> & {
  windows: string;
  mac: string;
};

export const Kbd = async ({ windows, mac, className, ...props }: KbdProps) => {
  const h = await headers();
  const ua = h.get('user-agent');

  const os = ua?.includes('Mac') ? 'Mac' : 'Windows';

  return (
    <kbd
      className={cn(
        'text-secondary bg-secondary/20 font-inter inline-flex h-[18px] items-center rounded px-1.5 text-xs',
        className
      )}
      {...props}
    >
      {os === 'Mac' ? mac : windows}
    </kbd>
  );
};
