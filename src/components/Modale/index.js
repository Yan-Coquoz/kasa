import React from "react";
import chevron from "../../assets/chevron.svg";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @prop {string} id id pour la fonction openModale
 * @prop {string} title titre de la modale
 * @prop {string} comment texte de la modale
 * @returns {HTMLElement}
 */
const Modale = ({ id, title, comment }) => {
    function openModal(section) {
        const modal = document.querySelector(`.${section}`);
        const icon = document.querySelector(`#${section}`);
        modal.classList.toggle("active");
        icon.classList.toggle("show");
    }

    return (
        <div className="modal__para">
            <div className="modal__para__bloc-title">
                <h3 className="modal__para__bloc-title__title">{title}</h3>
                <button
                    className="modal__para__bloc-title__bloc-icon__btn"
                    onClick={() => openModal(id)}
                >
                    <img
                        src={chevron}
                        alt="icon"
                        id={id}
                        className={"modal__para__bloc-title__bloc-icon__icon "}
                    />
                </button>
            </div>
            <div className={"modal__para__bloc-modal " + id}>
                {typeof comment === "string" ? (
                    <p className="modal__para__bloc-modal__p">{comment}</p>
                ) : (
                    <ul className="modal__para__bloc-modal__ul">
                        {comment.map((list) => {
                            return (
                                <li
                                    className="modal__para__bloc-modal__ul__li"
                                    key={list}
                                >
                                    {list}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

Modale.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string || PropTypes.arrayOf(PropTypes.string),
};
export default Modale;
