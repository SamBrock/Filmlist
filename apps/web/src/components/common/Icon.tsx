import {
  Check,
  Eye,
  Heart,
  Library,
  ListCheck,
  ListPlus,
  ListVideo,
  LucideProps,
  Pin,
  Plus,
  Search,
} from 'lucide-react';

const ICONS = {
  search: Search,
  plus: Plus,
  library: Library,
  listVideo: ListVideo,
  eye: Eye,
  check: Check,
  listPlus: ListPlus,
  listCheck: ListCheck,
  heart: Heart,
  pin: Pin,
} as const;

type IconProps = LucideProps & {
  name: keyof typeof ICONS;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
};
