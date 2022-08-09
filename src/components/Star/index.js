import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @prop {number} rate favoris
 * @returns {JSXElement}
 */
const Star = ({ rate }) => {
    const starMax = 5;
    const starTab = [];

    for (let i = 0; i < starMax; i++) {
        starTab.push(
            <FontAwesomeIcon
                icon={faStar}
                className={
                    i < rate
                        ? "identity__bloc-star__star active"
                        : "identity__bloc-star__star"
                }
                key={i}
            />
        );
    }

    return <>{starTab}</>;
};

Star.propTypes = {
    rate: PropTypes.number.isRequired,
};
export default Star;
