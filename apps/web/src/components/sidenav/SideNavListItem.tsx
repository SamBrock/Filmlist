import { Icon } from '@/components/common/Icon';
import { cn } from '@/lib/utils/cn';

type SideNavListItem = React.ComponentProps<'li'> & {
  graphic: React.ReactNode;
  title: string;
  subtitle: string;
};

export const SideNavListItem = ({ title, subtitle, graphic, className, ...props }: SideNavListItem) => {
  return (
    <li
      className={cn('flex cursor-pointer items-center rounded-md p-2 hover:bg-white/5', className)}
      {...props}
    >
      {graphic}
      <div className="ml-3 flex flex-col">
        <div className="text-sm font-medium text-white/80">{title}</div>
        <div className="flex items-center">
          <Icon name="pin" className="mr-1 size-3 rotate-45 fill-neutral-500 stroke-neutral-500" />
          <div className="text-sm text-white/40">{subtitle}</div>
        </div>
      </div>
    </li>
  );
};

export const SideNavListItemSeen = () => {
  return (
    <SideNavListItem
      title="Watched"
      subtitle="sambrock • 453 films"
      graphic={
        <div className="flex size-11 items-center justify-center rounded-sm bg-linear-to-br from-lime-500 to-green-500">
          <Icon name="eye" className="size-6 stroke-white/80" strokeWidth={2.5} />
        </div>
      }
    />
  );
};

export const SideNavListItemWatchlist = () => {
  return (
    <SideNavListItem
      title="Watchlist"
      subtitle="sambrock • 80 films"
      graphic={
        <div className="flex size-11 items-center justify-center rounded-sm bg-linear-to-br from-cyan-500 to-blue-500">
          <Icon name="plus" className="size-6 fill-white/60" strokeWidth={2.5} />
        </div>
      }
    />
  );
};

export const SideNavListItemLiked = () => {
  return (
    <SideNavListItem
      title="Liked"
      subtitle="sambrock • 45 films"
      graphic={
        <div className="flex size-11 items-center justify-center rounded-sm bg-linear-to-br from-orange-500 to-yellow-500">
          <Icon name="heart" className="size-6 stroke-white/80" strokeWidth={2.5} />
        </div>
      }
    />
  );
};
