import React from "react";
import PropTypes from "prop-types";
import chevron from "../../../assets/chevron.svg";
import "./style.scss";

const Slider = ({ pictures }) => {
    console.log(pictures);

    function handleChevronG() {
        console.log("je vais à gauche");
    }
    function handleChevronD() {
        console.log("je vais à droite");
    }

    return (
        <div className="slider">
            <ul className="slider__bloc-ul">
                {pictures.map((pict, key) => {
                    return (
                        <li key={key} className="slider__bloc-ul__bloc-li">
                            <img
                                src={pict}
                                alt="image du logement"
                                className="slider__bloc-ul__bloc-li__img"
                            />
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
