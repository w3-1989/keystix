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

export default function DashBoardMenuBar() {
  const mainNavItems = [
    {
      icon: Home,
      title: "Home",
      href: "/dashboard",
    },
    {
      icon: MapPin,
      title: "Locations",
      href: "/locations",
    },
    {
      icon: ShieldCheck,
      title: "Compliance",
      href: "/compliance",
    },
    {
      icon: BookText,
      title: "Documents",
      href: "/documents",
    },
    {
      icon: Settings,
      title: "Settings",
      href: "/settings",
    },
  ];

  const secondaryNavItems = [
    {
      icon: FileSearchCorner,
      title: "Documentation",
      href: "/documentation",
    },
    {
      icon: Wallet,
      title: "Refer a Friend",
      href: "/refer-a-friend",
    },
    {
      icon: MessagesSquare,
      title: "Support",
      href: "/support",
    },
  ];

  return (
    <>
      <main className="flex flex-col h-screen w-[320px] bg-brand-grey-50 ">
        <div className="p-4">
          <div className="flex flex-row items-center place-content-between">
            <Horizontal className="w-40 h-16" />
            <PanelLeftClose
              size={14}
              className="text-brand-grey-200 mb-0.5 cursor-pointer"
            />
          </div>
          <div className="relative w-full">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-grey-200"
            />
            <input
              type="text"
              placeholder="Search"
              className="placeholder:text-[12px] w-full pl-9 pr-3 py-2 bg-brand-grey-150 border border-brand-grey-100 rounded-lg text-black placeholder:text-brand-grey-200 focus:outline-none focus:ring-1 focus:ring-brand-light-blue-300"
            />
          </div>
          <div className="mt-3 mb-3">
            {mainNavItems.map(({ icon: Icon, title, href }) => {
              return (
                <div
                  key={href}
                  className="flex flex-row items-center gap-2 min-w-[285px] min-h-[36px] ml-3 "
                >
                  <span>
                    <Icon size={14} className="text-brand-grey-200" />
                  </span>
                  <p className="font-dm-sans text-[12px] text-brand-grey-200">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <p className=" uppercase font-dm-sans text-[12px] text-brand-grey-200">
              other
            </p>
            {secondaryNavItems.map(({ icon: Icon, title, href }) => {
              return (
                <div
                  key={href}
                  className="flex flex-row items-center gap-2 min-w-[285px] min-h-[36px] ml-3"
                >
                  <span>
                    <Icon size={14} className="text-brand-grey-200" />
                  </span>
                  <p className="font-dm-sans text-[12px] text-brand-grey-200">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
