import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

export type Tab = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type PageTypeProps = {
  tabs: Tab[];
};

export default function PageTabs({ tabs }: PageTypeProps) {
  return (
    <div className="flex flex-row gap-6 border-b border-brand-grey-100 ml-3 mr-3 mb-3 pt-2 px-2">
      {tabs.map(({ icon: Icon, label, href }) => (
        <NavLink
          key={href}
          to={href}
          className={({ isActive }) =>
            `flex flex-row items-center gap-1 pb-2 border-b-2 transition-colors duration-200 ${
              isActive
                ? "text-brand-light-blue-300 border-brand-light-blue-300"
                : "text-brand-grey-200 border-transparent"
            }`
          }
        >
          <Icon size={14} />
          <p className="text-[12px] mb-0.4">{label}</p>
        </NavLink>
      ))}
    </div>
  );
}
