import { cn } from '@/lib/utils/cn';

type MovieTitleProps = React.ComponentProps<'h1'> & {
  title: string;
};

export const MovieTitle = ({ title, className, ...props }: MovieTitleProps) => {
  return (
    <h1
      className={cn('max-w-[60vw] leading-15 font-black antialiased', className)}
      {...props}
      style={{
        fontSize: 'clamp(2rem, 4vw, 4rem)',
      }}
    >
      {title}
    </h1>
  );
};
