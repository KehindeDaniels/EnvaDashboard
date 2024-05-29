import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import SidebarArea from '../Components/SidebarArea';
import NavBar from '../Components/NavBar';
import Navigations from '../Components/Navigations';

const Layout = () => {
  return (
    <div className="layout">
        <Navigations/>
    </div>
  );
};

export default Layout;
