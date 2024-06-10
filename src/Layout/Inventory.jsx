import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Inventory = () => {
  const navLinks = [
    { name: "overview", link: "" },
    { name: "items", link: "items" },
    { name: "consumables", link: "consumables" },
    { name: "files", link: "files" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navLinkElements = navLinks.map((n, index) => (
    <li key={index} className="list-none">
      <NavLink
        to={n.link}
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700"
        }
        onClick={() => setIsDropdownOpen(false)}
      >
        {n.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="py-8 px-16">
        <div className="hidden md:flex gap-8">{navLinkElements}</div>
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 font-bold py-2 px-4 border border-gray-300 rounded"
          >
            {navLinks[0].name}
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 w-1/2 bg-white border border-gray-300 rounded shadow-lg">
              {navLinkElements}
            </ul>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Inventory;
