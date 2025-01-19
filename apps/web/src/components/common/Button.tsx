import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

const buttonVariants = cva('inline-flex font-medium items-center justify-center cursor-pointer', {
  variants: {
    variant: {
      default: 'bg-text text-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      outline: 'border border-border text-secondary hover:bg-text/10',
    },
    size: {
      default: 'h-input-md rounded-md px-3 text-sm',
      xs: 'h-input-xs rounded-md px-2 text-xs',
      sm: 'h-input-sm rounded-md px-3 text-sm',
      lg: 'h-input-lg rounded-md px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
