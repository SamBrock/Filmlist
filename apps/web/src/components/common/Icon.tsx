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
  star: Star,
  launch: ArrowUpRight,
} as const;

type IconProps = LucideProps & {
  name: keyof typeof ICONS;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent {...props} />;
};
