import { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

export const Input = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'h-input-sm border-border placeholder:text-secondary rounded-md border px-3 text-sm focus:outline-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
