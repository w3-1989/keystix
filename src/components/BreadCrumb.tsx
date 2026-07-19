import { Link, useMatches } from "react-router"

export default function BreadCrumb(){

    const matches = useMatches()

    const crumbs = matches
    .filter((match) => Boolean((match.handle as {breadcrumb?:string})?.breadcrumb))
    .map((match) => ({
        label: (match.handle as {breadcrumb: string}).breadcrumb,
        pathname: match.pathname
    }));

    return(
        <nav>
        {crumbs.map((crumb, index) => (
            <span key={crumb.pathname} className="text-[12px] font-dm-sans text-brand-grey-200">
                {index > 0 && " / "}
                <Link to={crumb.pathname}>{crumb.label}</Link>
            </span>
        ))}
    </nav>
  );
}