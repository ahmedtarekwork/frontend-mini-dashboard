// react router
import { Outlet } from "react-router";

// components
import Sidebar from "../components/layout/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <main className="flex gap-2 min-h-screen" id="home-page">
      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
};
export default MainLayout;
