import { cn } from '@/lib/utils/cn';

type MovieTitleProps = React.ComponentProps<'h1'> & {
  title: string;
};

export const MovieTitle = ({ title, className, ...props }: MovieTitleProps) => {
  return (
    <h1 className={cn('text-7xl leading-12 font-black antialiased', className)} {...props}>
      {title}
    </h1>
  );
};
