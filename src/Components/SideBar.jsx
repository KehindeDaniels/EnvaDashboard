import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  faBars,
  faTachometerAlt,
  faBox,
  faShoppingCart,
  faUsers,
  faCog,
  faCalendarAlt,
  faHamburger,
  faClose,
  faArrowDown,
  faChevronDown,
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
      link: "",
      nestedLink: [
        { name: "Home", link: "home" },
        { name: "Item", link: "items" },
        { name: "Unknown", link: "unknown" },
        { name: "files", link: "files" },
      ],
    },
    {
      navName: "Calendar",
      navIcon: faCalendarAlt,
      link: "calendar",
    },
  ];

  const [collapse, setCollapse] = useState({});

  function toggleCollapse(index) {
    setCollapse((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const navLinkElement = navLinks.map((n, index) => (
    <li
      key={index}
      onClick={() => toggleCollapse(index)}
      className="text-white flex flex-col gap-2 transition-all duration-500"
    >
      <div className="flex gap-4 items-center hover:bg-white/20 px-4 py-3 transition-colors duration-300">
        <FontAwesomeIcon icon={n.navIcon} />
        <Link to={n.link}>{n.navName}</Link>
        {n.nestedLink && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${
              !collapse[index] ? "rotate-180" : ""
            } transition-all duration-500`}
          />
        )}
      </div>
      {n.nestedLink && !collapse[index] && (
        <ul className="pl-8">
          {n.nestedLink.map((nested, nestedIndex) => (
            <li
              key={nestedIndex}
              className="text-white flex gap-4 items-center hover:bg-white/20 px-4 py-2 transition-colors duration-300 w-[100px]"
            >
              <Link to={nested.link}>{nested.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <aside
      className={`fixed w-64 sm:sticky sm:top-0 sm:w-64 bg-blue-500 h-screen ${
        closeSidebar && "sm:w-16"
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
      />
    </aside>
  );
};

export default SideBar;
