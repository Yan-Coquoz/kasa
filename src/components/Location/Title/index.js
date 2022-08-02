import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @prop {string} title nom de la location
 * @prop {string} location localisation de la location
 * @prop {arrayOfString} tags mots clés
 * @returns
 */
const Title = ({ title, location, tags }) => {
    return (
        <div className="location__title-container">
            <h2 className="location__title-container__title">{title}</h2>
            <h3 className="location__title-container__loc">{location}</h3>
            {tags.map((tag) => {
                return (
                    <span key={tag} className="location__title-container__tag">
                        {tag}
                    </span>
                );
            })}
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Title;
