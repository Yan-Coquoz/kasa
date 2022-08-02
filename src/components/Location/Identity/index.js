import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import "./style.scss";

/**
 * @param {arrayOfString} host nom et photo de l'utilisateur
 * @param {string} rating note de la location
 * @returns {JSXElement}
 */
const Identity = ({ host, rating }) => {
    return (
        <div className="location__identity-container">
            <div className="location__identity-container__bloc-name">
                <p className="location__identity-container__bloc-name__name">
                    {host.name}
                </p>
                <div className="location__identity-container__bloc-name__bloc-photo">
                    <img
                        src={host.picture}
                        alt="avatar"
                        className="location__identity-container__bloc-name__bloc-photo__photo"
                    />
                </div>
            </div>

            <div className="location__identity-container__bloc-star">
                <Star rate={Number(rating)} />
            </div>
        </div>
    );
};

Identity.propTypes = {
    host: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.string,
};
export default Identity;
