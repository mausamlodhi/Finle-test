import React from "react";
import "../styles/header.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { MessageIcon, SettingsIcon } from "./icons";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
      <div className="header-icons">
        <MessageIcon/>
        <SettingsIcon/>
        <FaBell className="icon notification-icon" />
        <FaUserCircle className="icon profile-icon" />
      </div>
    </header>
  );
};

export default Header;
