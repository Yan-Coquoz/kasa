import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @param {number} rate favoris
 * @returns
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
                        ? "location__identity-container__bloc-star__star active"
                        : "location__identity-container__bloc-star__star"
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
