import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import { createContext, useState } from "react";

export const isCollapsed = createContext();

export default function RootLayout() {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  return (
    <div className="dashboard">
      <isCollapsed.Provider value={{ isSideBarCollapsed, setIsSideBarCollapsed }}>
        <SideBar />
      </isCollapsed.Provider>

      <div className={`content-area-segment ${isSideBarCollapsed ? "collapsed" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
}
