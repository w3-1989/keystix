import PageHeader from "../../components/PageHeader";
import PageTabs from "../../components/PageTabs";
import { Rocket, Aperture, Funnel } from "lucide-react";
import type { Tab } from "../../components/PageTabs";
import { Outlet } from "react-router";

const homeTabs: Tab[] = [
  { icon: Rocket, label: "Launch Pad", href: "/dashboard/home/launch-pad" },
  { icon: Aperture, label: "Snapshot", href: "/dashboard/home/snapshot" },
  { icon: Funnel, label: "Pipeline", href: "/dashboard/home/pipeline" },
];

export default function Home() {
  return (
    <>
      <PageHeader />
      <PageTabs tabs={homeTabs} />
      <Outlet />
    </>
  );
}
