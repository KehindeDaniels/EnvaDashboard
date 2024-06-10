import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SidebarArea from "../Components/SidebarArea";
import NavBar from "../Components/NavBar";
import Navigations from "../Components/Navigations";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

const Layout = () => {
  const [closeSidebar, setCloseSidebar] = useState();

  function toggleSidebar() {
    setCloseSidebar((prev) => !prev);
  }

  return (
    <div className="layout flex h-dvh">
      <div className="sidebar z-10">
        <SideBar toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
      </div>
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="main flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
