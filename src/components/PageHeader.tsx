//Create Breadcrumbs comp
//Create dynamic title
//Create internal nav system
//Create inner page content

import {Settings, Bell} from "lucide-react"
import BreadCrumb from "./BreadCrumb";
import { useMatches } from "react-router";

export default function PageHeader() {

  const matches = useMatches();
  const currentTitle = matches.find((match) => (match.handle as { title?: string })?.title)?.handle as { title: string } | undefined;

  return (
        <div className=" p-4 flex flex-row items-start justify-between m-3">
      <div>
        <BreadCrumb/>
        <h1 className="text-[38px] font-adelphi">{currentTitle?.title}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <button className="p-4 border cursor-pointer border-brand-grey-100 rounded-lg">
          <Bell size={12} />
        </button>
        <button className="p-4 border cursor-pointer border-brand-grey-100 rounded-lg">
          <Settings size={12} />
        </button>
      </div>
    </div>
  );
}

