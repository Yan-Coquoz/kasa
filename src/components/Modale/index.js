import React from "react";
import chevron from "../../assets/chevron.svg";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @param {string} id id pour la fonction openModale
 * @param {string} title titre de la modale
 * @param {string} comment texte de la modale
 * @returns {HTMLElement}
 */
const Modale = ({ id, title, comment }) => {
    function openModal(section) {
        const modal = document.querySelector(`.${section}`);
        const btn = document.querySelector(`#${section}`);
        modal.classList.toggle("active");
        btn.classList.toggle("show");
    }

    return (
        <div className="modal__para">
            <div className="modal__para__bloc-title">
                <h3 className="modal__para__bloc-title_title">{title}</h3>
                <button
                    className="modal__para__bloc-title_bloc-icon"
                    onClick={() => openModal(id)}
                >
                    <img
                        src={chevron}
                        alt="icon"
                        id={id}
                        className="modal__para__bloc-title_bloc-icon_icon"
                    />
                </button>
            </div>
            <div className={"modal__para__bloc-modal " + id}>
                <p className="modal__para__bloc-modal_p">{comment}</p>
            </div>
        </div>
    );
};

Modale.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
};
export default Modale;
