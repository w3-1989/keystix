import { createBrowserRouter } from "react-router";
import App from "./App";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Compliance from "./pages/Compliance";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";
import Documentation from "./pages/Documentation";
import ReferAFriend from "./pages/ReferAFriend";
import Support from "./pages/Support";
import Home from "./pages/Home";
import SuggestFeatures from "./pages/SuggestFeatures";

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
        handle: {breadcrumb : "Home", title: "Home"},
      },
      {
        path: "/dashboard/locations",
        element: <Locations />,
        handle: {breadcrumb : "Locations", title: "Locations"},
      },
      {
        path: "/dashboard/compliance",
        element: <Compliance />,
        handle: {breadcrumb : "Compliance", title: "Compliance"},
      },
      {
        path: "/dashboard/documents",
        element: <Documents />,
        handle: {breadcrumb : "Documents", title: "Documents"},
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
        handle: {breadcrumb : "Settings", title: "Settings"},
      },
      {
        path: "/dashboard/documentation",
        element: <Documentation />,
        handle: {breadcrumb : "Documentation", title: "Documentation"},
      },
      {
        path: "/dashboard/refer-a-friend",
        element: <ReferAFriend />,
        handle: {breadcrumb : "Refer-a-Friend", title: "Refer a Friend"},
      },
      {
        path: "/dashboard/support",
        element: <Support />,
        handle: {breadcrumb : "Support", title: "Support"},
      },
      {
        path: "/dashboard/suggest-features",
        element: <SuggestFeatures />,
      },
    ],
  },
]);
