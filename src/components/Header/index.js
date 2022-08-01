import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import logo from "../../assets/LOGO.svg";

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__h1">
                <img src={logo} alt="logo" className="header__h1_logo" />
            </h1>
            <nav className="header__nav">
                <Link className="header__nav_link" to="/">
                    Accueil
                </Link>
                <Link className="header__nav_link" to="/about">
                    A Propos
                </Link>
            </nav>
        </div>
    );
};

export default Header;
