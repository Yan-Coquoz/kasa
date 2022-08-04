import React, { useState } from "react";
import PropTypes from "prop-types";
import chevron from "../../../assets/chevron.svg";
import "./style.scss";

const Slider = ({ pictures }) => {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    function handleChevronG() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    function handleChevronD() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    // test si le tableau est présent ou inférieur ou = à 0
    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <ul className="slider__bloc-ul">
                {pictures.map((pict, key) => {
                    return (
                        <li
                            key={key}
                            className={
                                "slider__bloc-ul__bloc-li" + key === current
                                    ? "slider__bloc-ul__bloc-li active"
                                    : "slider__bloc-ul__bloc-li"
                            }
                        >
                            {key === current && (
                                <img
                                    src={pict}
                                    alt="image du logement"
                                    className="slider__bloc-ul__bloc-li__img"
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
            <div className="slider__bloc-chevron">
                <div
                    className="slider__bloc-chevron__partie-g"
                    onClick={handleChevronG}
                >
                    <img
                        src={chevron}
                        alt="chevron-gauche"
                        className="slider__bloc-chevron__partie-g__gauche"
                    />
                </div>
                <div
                    className="slider__bloc-chevron__partie-d"
                    onClick={handleChevronD}
                >
                    <img
                        src={chevron}
                        alt="chevron-droite"
                        className="slider__bloc-chevron__partie-d__droite"
                    />
                </div>
            </div>
        </div>
    );
};

Slider.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
};
export default Slider;
