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

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: <Menu />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/locations",
        element: <Locations/>
      },
        {
        path: "/dashboard/compliance",
        element: <Compliance />,
      },
      {
        path: "/dashboard/documents",
        element: <Documents/>
      },
      {
        path: "/dashboard/settings",
        element: <Settings/>
      },
       {
        path: "/dashboard/documentation",
        element: <Documentation />,
      },
      {
        path: "/dashboard/refer-a-friend",
        element: <ReferAFriend/>
      },
        {
        path: "/dashboard/support",
        element: <Support />,
      },
    ],
  },
]);
