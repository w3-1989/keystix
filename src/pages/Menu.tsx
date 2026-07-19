//Create side menu comp - obj's (Main menu, Secondary Menu), and New feature coming soon as child comp

import { Outlet } from "react-router";
import DashBoardMenuBar from "../components/DashBoardMenuBar";
import ProtectedRoutes from "../components/ProtectedRoutes";
export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashBoardMenuBar />
      <div className="flex-1 overflow-y-auto">
        <ProtectedRoutes>
          <Outlet />
        </ProtectedRoutes>
      </div>
    </div>
  );
}
