import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Error404 = () => {
  return (
    <div className="page404">
      <div className="page404__bloc">
        <h2 className="page404__bloc-title">404</h2>
        <p className="page404__bloc-oups">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
      </div>
      <Link to="/" className="page404__goback">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error404;
