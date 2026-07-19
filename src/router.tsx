import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import CreateAccount from "./pages/CreateAccount.tsx";
import Login from "./pages/Login.tsx";
import Menu from "./pages/Menu.tsx";
import Locations from "./pages/locations/index.tsx";
import Compliance from "./pages/compliance/index.ts";
import Documents from "./pages/documents/index.tsx";
import Settings from "./pages/settings/index.tsx";
import Documentation from "./pages/documentation/index.tsx";
import ReferAFriend from "./pages/refer-a-friend/index.tsx";
import Support from "./pages/support/index.tsx";
import Home from "./pages/home/index.tsx";
import SuggestFeatures from "./pages/suggest-feature/index.tsx";
import Pipeline from "./pages/home/Pipeline.tsx";
import LaunchPad from "./pages/home/LaunchPad";
import Snapshot from "./pages/home/Snapshot";
import Billing from "./pages/settings/Billing";
import Company from "./pages/settings/Company";
import Integrations from "./pages/settings/Integrations";
import Personal from "./pages/settings/Personal";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/login", element: <Login /> },

  {
    path: "/dashboard",
    element: <Menu />,
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
        handle: { breadcrumb: "Home", title: "Home" },
        children: [
          { index: true, element: <Navigate to="launch-pad" replace /> },
          {
            path: "launch-pad",
            element: <LaunchPad />,
            handle: { breadcrumb: "Launch Pad" },
          },
          {
            path: "snapshot",
            element: <Snapshot />,
            handle: { breadcrumb: "Snapshot" },
          },
          {
            path: "pipeline",
            element: <Pipeline />,
            handle: { breadcrumb: "Pipeline" },
          },
        ],
      },
      {
        path: "/dashboard/locations",
        element: <Locations />,
        handle: { breadcrumb: "Locations", title: "Locations" },
      },
      {
        path: "/dashboard/compliance",
        element: <Compliance />,
        handle: { breadcrumb: "Compliance", title: "Compliance" },
      },
      {
        path: "/dashboard/documents",
        element: <Documents />,
        handle: { breadcrumb: "Documents", title: "Documents" },
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
        handle: { breadcrumb: "Settings", title: "Settings" },
        children: [
          { index: true, element: <Navigate to="personal" replace /> },
          { path: "personal", element: <Personal />, handle: { breadcrumb: "Personal", title: "Personal" } },
          { path: "company", element: <Company />, handle: { breadcrumb: "Company", title: "Company" } },
          { path: "billing", element: <Billing />, handle: { breadcrumb: "Billing", title: "Billing" } },
          { path: "integrations", element: <Integrations />, handle: { breadcrumb: "Integrations", title: "Integrations" } },
        ],
      },
      {
        path: "/dashboard/documentation",
        element: <Documentation />,
        handle: { breadcrumb: "Documentation", title: "Documentation" },
      },
      {
        path: "/dashboard/refer-a-friend",
        element: <ReferAFriend />,
        handle: { breadcrumb: "Refer a Friend", title: "Refer a Friend" },
      },
      {
        path: "/dashboard/support",
        element: <Support />,
        handle: { breadcrumb: "Support", title: "Support" },
      },
      {
        path: "/dashboard/suggest-features",
        element: <SuggestFeatures />,
        handle: { breadcrumb: "Suggest a Feature", title: "Suggest Feature" },
      },
    ],
  },
]);
