// Creating auth context using supabase to create protect routes

import {
  Home,
  MapPin,
  ShieldCheck,
  BookText,
  Settings,
  PanelLeftClose,
  Search,
  FileSearchCorner,
  Wallet,
  MessagesSquare,
} from "lucide-react";
import Horizontal from "../assets/brand/horizontal_lb.svg?react";
import NavItem from "./NavItem";
import { NavLink } from "react-router";

const mainNavItems = [
  { icon: Home, title: "Home", href: "/dashboard" },
  { icon: MapPin, title: "Locations", href: "/dashboard/locations" },
  { icon: ShieldCheck, title: "Compliance", href: "/dashboard/compliance" },
  { icon: BookText, title: "Documents", href: "/dashboard/documents" },
  { icon: Settings, title: "Settings", href: "/dashboard/settings" },
];

const secondaryNavItems = [
  { icon: FileSearchCorner, title: "Documentation", href: "/dashboard/documentation" },
  { icon: Wallet, title: "Refer a Friend", href: "/dashboard/refer-a-friend" },
  { icon: MessagesSquare, title: "Support", href: "/dashboard/support" },
];

export default function DashBoardMenuBar() {
  return (
    <main className="flex flex-col h-screen w-[320px] overflow-hidden bg-brand-grey-50">
      <div className="p-4">
        <div className="flex flex-row items-center place-content-between">
          <Horizontal className="w-40 h-16" />
          <PanelLeftClose
            size={14}
            className="text-brand-grey-200 mb-0.5 cursor-pointer"
          />
        </div>

        <div className="relative w-full mt-3">
          <Search
            size={14}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-brand-grey-200"
          />
          <input
            type="text"
            placeholder="Search Location"
            className="placeholder:text-[12px] text-[12px] w-full pl-9 pr-3 py-2 bg-brand-grey-150 border border-brand-grey-100 rounded-lg text-black placeholder:text-brand-grey-200 focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
          />
        </div>
      </div>

      <div className="flex-1 h-fill px-4 pb-4">
        <div className="mb-3">
          {mainNavItems.map(({ icon, title, href }) => (
            <NavLink to={href} end>
              {({ isActive }) => (
                <NavItem
                  key={href}
                  icon={icon}
                  title={title}
                  isActive={isActive}
                />
              )}
            </NavLink>
          ))}
        </div>

        <div>
          <p className="uppercase font-dm-sans text-[12px] text-brand-grey-200 mb-2">
            other
          </p>
          {secondaryNavItems.map(({ icon, title, href }) => (
            <NavLink to={href} end>
              {({ isActive }) => (
                <NavItem
                  key={href}
                  icon={icon}
                  title={title}
                  isActive={isActive}
                />
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </main>
  );
}
