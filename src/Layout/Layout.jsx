import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import SidebarArea from '../Components/SidebarArea';

const Layout = () => {
  return (
    <div className="layout">
        <SidebarArea/>
    </div>
  );
};

export default Layout;
