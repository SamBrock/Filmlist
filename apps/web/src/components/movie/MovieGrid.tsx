import { cn } from '@/lib/utils/cn';

export const MovieGrid = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('grid grid-cols-6 gap-2', className)} {...props}>
      {props.children}
    </div>
  );
};
