import type { LucideIcon } from "lucide-react";

type NavItemProps = {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
};

export default function NavItem({ icon: Icon, title, isActive }: NavItemProps) {
  return (
    <div className={ `${isActive ? "bg-brand-light-blue-300/10" : ""} flex flex-row items-center p-2 gap-2 rounded-[8px] min-w-[285px] min-h-[36px] cursor-pointer`}>
      <Icon size={14} className={`${isActive ? "text-brand-light-blue-300" : "text-brand-grey-200"}`} />
      <p className={`${isActive ? "text-brand-light-blue-300" : "text-brand-grey-200"} font-dm-sans text-[12px]`}>{title}
      </p>
    </div>
  );
}