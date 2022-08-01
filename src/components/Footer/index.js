import React from "react";
import logo from "../../assets/LOGO_white.svg";

import "./style.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__bloc-logo">
                <img src={logo} alt="logo noir et blanc" />{" "}
            </div>
            <div className="footer__right">
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
};

export default Footer;
