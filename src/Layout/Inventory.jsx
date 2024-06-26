import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [activeLink, setActiveLink] = useState(navLinks[0].name);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    setIsDropdownOpen(false);
  };

  const navLinkElements = navLinks.map((n, index) => (
    <li key={index} className="list-none">
      <NavLink
        to={n.link}
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700"
        }
        end
        onClick={() => handleLinkClick(n)}
      >
        {n.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="p-4 sm:px-8">
        <div className="hidden md:flex gap-8">{navLinkElements}</div>
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 font-bold py-2 px-4 border border-gray-300 rounded"
          >
            {activeLink}{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-all duration-200 ${
                isDropdownOpen && "rotate-180"
              }`}
            />
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
