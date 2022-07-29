import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

/**
 *
 * @param {string} titre de la carte
 * @param {string} id de la carte
 * @returns {HTMLElement}
 */
const Carte = ({ title, id }) => {
  const slug = `/location/${id}`;
  return (
    <div className="carte">
      <Link to={slug}>
        <div className="carte__bloc">
          <h3 className="carte__bloc-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

Carte.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Carte;
