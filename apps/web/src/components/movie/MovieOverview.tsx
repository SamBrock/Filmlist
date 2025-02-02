import { cn } from '@/lib/utils/cn';

type MovieOverviewProps = React.ComponentProps<'p'> & {
  overview: string;
};

export const MovieOverview = ({ overview, className, ...props }: MovieOverviewProps) => {
  return (
    <p className={cn('leading-7 text-white/70', className)} {...props}>
      {overview}
    </p>
  );
};
