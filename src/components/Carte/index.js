import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

/**
 *
 * @prop {string} titre de la carte
 * @prop {string} id de la carte
 * @prop {string} cover de la carte
 * @returns {HTMLElement}
 */
const Carte = ({ title, id, cover }) => {
    const slug = `/location/${id}`;
    return (
        <div className="carte">
            <Link to={slug}>
                <div className="carte__bloc">
                    <img
                        src={cover}
                        alt="Image de couverture"
                        className="carte__bloc__img"
                    />
                    <h3 className="carte__bloc__title">{title}</h3>
                </div>
            </Link>
        </div>
    );
};

Carte.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};
export default Carte;
