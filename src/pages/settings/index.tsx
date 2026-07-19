import PageHeader from "../../components/PageHeader";
import PageTabs from "../../components/PageTabs";
import { User, Building2, CreditCard, Plug } from "lucide-react";
import type { Tab } from "../../components/PageTabs";
import { Outlet } from "react-router";

const settingsTabs: Tab[] = [
  { icon: User, label: "Personal", href: "/dashboard/settings/personal" },
  { icon: Building2, label: "Company", href: "/dashboard/settings/company" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/settings/billing" },
  { icon: Plug, label: "Integrations", href: "/dashboard/settings/integrations" },
];
export default function Settings(){
    return (
        <>
        <PageHeader/>
        <PageTabs tabs={settingsTabs}/>
        <Outlet/>
        </>
    )
}