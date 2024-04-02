import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/carbon-cell-logo.png";
import { links, options, userProfile } from "./sidebarData";

const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [toggleSidebarCollapsed, setToggleSidebarCollapsed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 600) {
                setToggleSidebar(false);
                setToggleSidebarCollapsed(false);
            } else {
                setToggleSidebar(false);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleToggleSidebar = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 600) {
            setToggleSidebar(!toggleSidebar);
        } else {
            setToggleSidebarCollapsed(!toggleSidebarCollapsed);
        }
    };
    return (
        <>
            <div
                className={`sidebar-container ${
                    toggleSidebarCollapsed ? "collapsed" : ""
                }`}
            >
                <div className={`sidebar ${toggleSidebar ? "mobile" : ""}`}>
                    <div className="top">
                        <div className="header">
                            <div className="logo-container">
                                <img src={logo} alt="logo" />
                            </div>
                            <div
                                className="hamburger-container"
                                onClick={handleToggleSidebar}
                            >
                                <GiHamburgerMenu />
                            </div>
                        </div>
                        <div className="search">
                            <div className="search-input-container">
                                <div className="search-icon-container">
                                    <FiSearch />
                                </div>
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>

                        <div className="links">
                            {links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.path}
                                    className={({ isActive }) => {
                                        return isActive
                                            ? "link active"
                                            : "link";
                                    }}
                                >
                                    <div className="link-icon-container">
                                        {link.icon}
                                    </div>
                                    <span>{link.title}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="options">
                            {options.map((option, index) => (
                                <div className="option" key={index}>
                                    <div className="option-icon-container">
                                        {option.icon}
                                    </div>
                                    <span>{option.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="profile">
                            <div className="user">
                                <div className="avatar-container">
                                    <img
                                        src={userProfile.avatarSrc}
                                        alt="user avatar"
                                    />
                                </div>
                                <div className="information">
                                    <div className="name">
                                        {userProfile.name}
                                    </div>
                                    <div className="email">
                                        {userProfile.email}
                                    </div>
                                </div>
                            </div>
                            <div className="setting">
                                <div className="icon-container">
                                    {userProfile.settingIcon}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-nav">
                    <div className="header">
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                        </div>
                        <div
                            className="hamburger-container"
                            onClick={handleToggleSidebar}
                        >
                            <GiHamburgerMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
