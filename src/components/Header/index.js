import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import logo from "../../assets/LOGO.png";

const Header = (props) => {
  // écrire le code ici
  return (
    <div className="header">
      <h1 className="header__h1">
        <img src={logo} alt="logo" className="header__h1_logo" />
      </h1>
      <nav className="header__nav_Link">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </div>
  );
};

export default Header;
