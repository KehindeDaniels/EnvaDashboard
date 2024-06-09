import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Inventory = () => {
  const navLinks = [
    { name: "overview", link: "" },
    { name: "items", link: "items" },
    { name: "consumables", link: "consumables" },
    { name: "files", link: "files" },
  ];

  const navLinkElements = navLinks.map((n, index) => (
    <li key={index}>
      <NavLink
        to={n.link}
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700"
        }
      >
        {n.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="py-8 px-16">
        {/* <ul className="flex gap-8 sm:gap-8 md:gap-16">{navLinkElements}</ul> */}
      </nav>
      <Outlet />
    </>
  );
};

export default Inventory;
