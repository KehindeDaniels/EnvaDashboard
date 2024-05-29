import React, { useState } from 'react';
import { faBars, faTachometerAlt, faBox, faShoppingCart, faUsers, faCog, faCalendarAlt, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SidebarArea = () => {
  const sideNav = [
    {
      navName: 'Sample log',
      navIcon: faBox,
    },
    {
      navName: 'User',
      navIcon: faUsers,
    },
    {
      navName: 'Inventory',
      navIcon: faShoppingCart,
    },
    {
      navName: 'Calender',
      navIcon: faCalendarAlt,
    },
  ]
  const [collapsed, setCollapsed] = useState(false)


  const navs = sideNav.map((sideNavs, index)=>(
            <li key={index} className='hover:bg-white hover:bg-opacity-[.13] pl-8 py-4'>
              <a href="#" className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={sideNavs.navIcon}/>
                {!collapsed && <span >{sideNavs.navName}</span>}
              </a>
            </li>
  ))

    function handleCollapsed (){
    setCollapsed(prev=>!prev)
    console.log(collapsed)
  }


  return (
<aside className={`bg-blue-600 drop-shadow-xl shadow-xl min-h-screen transition-all duration-500 ${!collapsed ? 'w-64' : 'w-16'} `}>      <div className="p-8 text-white  flex items-center justify-between gap-8">
        {!collapsed && <div className="text-2xl font-bold">EnvAccord</div>}
        <div className="hambugger" onClick={handleCollapsed}>
          <FontAwesomeIcon icon={faHamburger}/>
        </div>
      </div>
      <nav className=''>
        <ul className='flex flex-col gap-4 w-full text-white text-lg'>
          {navs}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarArea;
