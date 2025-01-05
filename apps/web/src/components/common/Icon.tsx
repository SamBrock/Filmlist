import { cva, VariantProps } from 'class-variance-authority';
import { type LucideProps, Search } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-[18px] h-[18px]',
      lg: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const ICONS = {
  search: Search,
};

type IconProps = LucideProps &
  VariantProps<typeof iconVariants> & {
    name: keyof typeof ICONS;
  };

export const Icon = ({ name, className, size, ...props }: IconProps) => {
  const Component = ICONS[name];

  return <Component className={cn(iconVariants({ size }), className, 'h')} {...props} />;
};
