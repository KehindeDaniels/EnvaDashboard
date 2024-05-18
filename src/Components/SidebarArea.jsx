import React, { useState } from 'react';
import { faBox, faUsers, faShoppingCart, faCalendarAlt, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const SidebarArea = () => {
  const sideNav = [
    { navName: 'Sample log', navIcon: faBox, path: '/sample-log' },
    { navName: 'User', navIcon: faUsers, path: '/clients' },
    { navName: 'Inventory', navIcon: faShoppingCart, path: '/inventory' },
    { navName: 'Calender', navIcon: faCalendarAlt, path: '/Calender' },
  ];
  const [collapsed, setCollapsed] = useState(false);

  const navs = sideNav.map((sideNavs, index) => (
    <li key={index} className='hover:bg-white hover:bg-opacity-[.13] pl-8 py-4'>
      <NavLink to={sideNavs.path} className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={sideNavs.navIcon} />
        {!collapsed && <span>{sideNavs.navName}</span>}
      </NavLink>
    </li>
  ));

  function handleCollapsed() {
    setCollapsed((prev) => !prev);
    console.log(collapsed);
  }

  return (
    <aside className={`bg-blue-600 drop-shadow-xl shadow-xl min-h-screen transition-all duration-500 ${!collapsed ? 'w-64' : 'w-16'}`}>
      <div className="p-8 text-white flex items-center justify-between gap-8">
        {!collapsed && <div className="text-2xl font-bold">EnvAccord</div>}
        <div className="hambugger" onClick={handleCollapsed}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
      </div>
      <nav>
        <ul className='flex flex-col gap-4 w-full text-white text-lg'>
          {navs}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarArea;
