import { cn } from '@/lib/utils/cn';

type DividerDotProps = React.ComponentProps<'span'>;

export const DividerDot = ({ className, ...props }: DividerDotProps) => {
  return (
    <span
      className={cn('text-sm select-none', className)}
      {...props}
      dangerouslySetInnerHTML={{ __html: '•' }}
    />
  );
};
