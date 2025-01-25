import { cn } from '@/lib/utils/cn';

export const HeaderLink = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('text-secondary text-sm font-medium', className)} {...props}>
      {props.children}
    </div>
  );
};
