// SideBar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  faBox,
  faShoppingCart,
  faUsers,
  faCalendarAlt,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ closeSidebar, toggleSidebar }) => {
  const navLinks = [
    {
      navName: "Sample log",
      navIcon: faBox,
      link: "sampleLog",
    },
    {
      navName: "Clients",
      navIcon: faUsers,
      link: "clients",
    },
    {
      navName: "Inventory",
      navIcon: faShoppingCart,
      link: "inventory",
      nestedLink: [
        { name: "overview", link: "" },
        { name: "items", link: "items" },
        { name: "consumables", link: "consumables" },
        { name: "files", link: "files" },
      ],
    },
    {
      navName: "Calendar",
      navIcon: faCalendarAlt,
      link: "calendar",
    },
  ];

  const [collapseNavigation, setCollapseNavigation] = useState({});

  function toggleCollapseNavigation(index) {
    setCollapseNavigation((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const navLinkElement = navLinks.map((n, index) => (
    <li
      key={index}
      onClick={() => toggleCollapseNavigation(index)}
      className="text-white flex flex-col gap-2 transition-all duration-500"
    >
      <div className="flex gap-4 items-center hover:bg-white/20 px-4 py-3 transition-colors duration-300">
        <FontAwesomeIcon icon={n.navIcon} />
        <NavLink to={n.link}>{n.navName}</NavLink>
        {n.nestedLink && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${
              !collapseNavigation[index] ? "rotate-180" : ""
            } transition-all duration-500`}
          />
        )}
      </div>
      {n.nestedLink && !collapseNavigation[index] && (
        <ul className="pl-8">
          {n.nestedLink.map((nested, nestedIndex) => (
            <li
              key={nestedIndex}
              className="text-white flex gap-4 items-center hover:bg-white/20 px-4 py-2 transition-colors duration-300 w-[100px]"
            >
              <NavLink to={`${n.link}/${nested.link}`}>{nested.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <aside
      className={`fixed w-64 sm:sticky sm:top-0 sm:w-64 bg-blue-500 h-dvh ${
        closeSidebar && "hidden"
      }`}
    >
      <div className="logo flex items-center gap-2 px-4 py-2">
        <img src={logo} alt="logo" className="rounded-full w-14 h-14" />
        <h1 className="text-white font-bold text-xl">Envaccord</h1>
      </div>

      <nav className="mt-16">
        <ul className="flex flex-col gap-6 pl-6">{navLinkElement}</ul>
      </nav>

      <FontAwesomeIcon
        icon={faClose}
        className="absolute text-white top-6 right-6 h-6 sm:hidden"
        onClick={toggleSidebar}
      />
    </aside>
  );
};

export default SideBar;
