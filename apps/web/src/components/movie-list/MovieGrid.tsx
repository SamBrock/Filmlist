export const MovieGrid = (props: React.ComponentProps<'div'>) => {
  return (
    <div className="grid grid-cols-6 gap-1" {...props}>
      {props.children}
    </div>
  );
};
