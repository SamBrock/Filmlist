import {
  ArrowUpRight,
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
  Star,
} from 'lucide-react';

const ICONS = {
  check: Check,
  eye: Eye,
  heart: Heart,
  launch: ArrowUpRight,
  library: Library,
  listCheck: ListCheck,
  listPlus: ListPlus,
  listVideo: ListVideo,
  pin: Pin,
  plus: Plus,
  search: Search,
  star: Star,
} as const;

export type IconName = keyof typeof ICONS;

type IconProps = LucideProps & {
  name: IconName;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
};
