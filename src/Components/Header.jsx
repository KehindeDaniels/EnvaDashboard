/** @format */

import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons/faHamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import me from "../assets/me";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleSearch() {
    setIsCollapsed((prev) => !isCollapsed);
  }
  return (
    <>
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="1st-div flex items-center gap-4">
          <FontAwesomeIcon icon={faHamburger} />
          <div
            className={`search flex items-center gap-2 text-slate-400 ${
              !isCollapsed && "border py-1 px-3 w-48 rounded-full"
            }`}
          >
            <FontAwesomeIcon
              icon={faSearch}
              onClick={toggleSearch}
            />
            <input
              type="text"
              placeholder={`${!isCollapsed ? "Search" : ""}`}
              className="bg-transparent"
            />
          </div>
        </div>

        <div className="2nd-div">
          <div className="2nd-div">
            <div className="notification relative">
              <FontAwesomeIcon
                icon={faBell}
                className="h-6"
              />
              <div className="notificationCount absolute bg-red-500 text-white w-6 h-6 rounded-full text-center bottom-4 left-2">
                4
              </div>
            </div>
          </div>

          <div className="profile">
            <img
              src={me}
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
