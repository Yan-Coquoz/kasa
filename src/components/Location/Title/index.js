import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @param {*} param0
 * @returns
 */
const Title = ({ title, location, tags }) => {
    return (
        <div className="location_title-container">
            <h2 className="location_title-container__title">{title}</h2>
            <h3 className="location_title-container__loc">{location}</h3>
            {tags.map((tag) => {
                return (
                    <span key={tag} className="location_title-container__tag">
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
    tags: PropTypes.arrayOf(PropTypes.string),
};
export default Title;
