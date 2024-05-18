import React from 'react';
import NavBar from './NavBar';
import Analytics from './Analytics'
import { Outlet } from 'react-router-dom';

const ContentArea = () => {
  return (
    <div className='flex flex-col flex-grow bg-blue-50 gap-8'>
      <NavBar />
      <Analytics/>
      <div className='flex-grow bg-white ml-8 p-8 rounded-md'>
        <Outlet />
      </div>
    </div>
  );
};

export default ContentArea;
