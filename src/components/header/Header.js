import React, { useState } from 'react';
import "./Header.css";
import {ReactComponent as Logo} from "../../../src/assets/logo.svg";
import {Link} from "react-router-dom";
import {HiDotsHorizontal} from "react-icons/hi";
import {IoClose} from "react-icons/io5";
import {IoCartOutline} from "react-icons/io5";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="header-wrapper">
            <div className="header-container">
                <Logo/>
                <nav className="header-navigation">
                    <Link to="/about" className="nav-header-item">About</Link>
                    <Link to="/blog" className="nav-header-item">Blog</Link>
                    <Link to="/work" className="nav-header-item">Work</Link>
                    <Link to="/platform" className="nav-header-item">Platform</Link>
                    <Link to="/contact" className="nav-header-item">Contact</Link>
                    <Link to="/shop" className="nav-header-item">Shop</Link>
                </nav>
                <button className="header-button">
                    Store Locator
                </button>
            </div>
            <div className="header-container-mobile">
                <Logo/>
                <section>
                    <button className="header-button-mobile"><IoCartOutline size={35}/></button>
                    <button className="header-button-mobile" onClick={toggleSidebar}><HiDotsHorizontal size={35}/>
                    </button>
                </section>
                <nav className={`header-navigation-mobile ${sidebarOpen ? 'open' : ''}`}>
                    <button className="header-button-mobile-close" onClick={toggleSidebar}>
                        <IoClose size={30}/>
                    </button>
                    <Link to="/about" className="nav-header-item">About</Link>
                    <Link to="/blog" className="nav-header-item">Blog</Link>
                    <Link to="/work" className="nav-header-item">Work</Link>
                    <Link to="/platform" className="nav-header-item">Platform</Link>
                    <Link to="/contact" className="nav-header-item">Contact</Link>
                    <Link to="/shop" className="nav-header-item">Shop</Link>
                    <button className="header-button">
                        Store Locator
                    </button>
                </nav>

            </div>
        </div>
    );
};

export default Header;