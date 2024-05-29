import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import SidebarArea from '../Components/SidebarArea';
import NavBar from '../Components/NavBar';
import Navigations from '../Components/Navigations';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div className="layout flex h-dvh bg-red-200">
      <div className="sidebar hidden">
       <SideBar/>
      </div>
      <div className="flex flex-col flex-1">
        <Header/>
        <main className="main flex-1">
        <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
