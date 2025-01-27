import { Icon } from '@/components/common/Icon';

export const SideNavHeader = () => {
  return (
    <div className="flex gap-3 p-2">
      <Icon name="listVideo" className="stroke-white/60" />
      <div className="font-semibold text-white/60">Your lists</div>
    </div>
  );
};
