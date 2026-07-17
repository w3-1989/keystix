//Create side menu comp - obj's (Main menu, Secondary Menu), and New feature coming soon as child comp

import { Outlet } from "react-router";
import DashBoardMenuBar from "../components/DashBoardMenuBar";
export default function Dashboard() {
  return (
    <div className="flex">
      <DashBoardMenuBar />
      <Outlet />
    </div>
  );
}
