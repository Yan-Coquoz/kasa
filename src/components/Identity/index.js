import React from "react";
import PropTypes from "prop-types";
import Star from "../Star";

import "./style.scss";

/**
 * @prop {arrayOfString} host nom et photo de l'utilisateur
 * @prop {string} rating note de la location
 * @returns {JSXElement}
 */
const Identity = ({ host, rating }) => {
    return (
        <div className="identity">
            <div className="identity__bloc-name">
                <p className="identity__bloc-name__name">{host.name}</p>
                <div className="identity__bloc-name__bloc-photo">
                    <img
                        src={host.picture}
                        alt="avatar"
                        className="identity__bloc-name__bloc-photo__photo"
                    />
                </div>
            </div>

            <div className="identity__bloc-star">
                <Star rate={Number(rating)} />
            </div>
        </div>
    );
};

Identity.propTypes = {
    host: PropTypes.objectOf(PropTypes.string),
    rating: PropTypes.string,
};
export default Identity;
