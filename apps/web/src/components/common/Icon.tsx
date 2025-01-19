import { LucideProps, Search } from 'lucide-react';

const ICONS = {
  search: Search,
} as const;

type IconProps = LucideProps & {
  name: keyof typeof ICONS;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
};
