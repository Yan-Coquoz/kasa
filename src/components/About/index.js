import React from "react";
import bg from "../../assets/aboutBG.png";
import "./style.scss";
import chevron from "../../assets/chevron.svg";

const About = () => {
  function openModal(evt, section) {
    console.log(evt.target.id);
    const modal = document.querySelector(`.${section}`);
    const btn = document.querySelector(`#${section}`);
    modal.classList.toggle("active");
    btn.classList.toggle("show");
  }
  return (
    <div className="about">
      <div className="about__bg-bloc">
        <img src={bg} alt="montagne" className="about__bg-bloc_img" />
      </div>
      {/* groupe modale */}
      <div className="about__main-container">
        {/* SECTION Fiabilité */}
        <div className="about__main-container__para">
          <div className="about__main-container__para__bloc-title">
            <h3 className="about__main-container__para__bloc-title_title">
              Fiabilité
            </h3>
            <button
              className="about__main-container__para__bloc-title_bloc-icon"
              onClick={(evt) => openModal(evt, "fiablite")}
            >
              <img
                src={chevron}
                alt="icon"
                id="fiablite"
                className="about__main-container__para__bloc-title_bloc-icon_icon"
              />
            </button>
          </div>
          <div className="about__main-container__para__bloc-modal fiablite">
            <p className="about__main-container__para__bloc-modal_p">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        {/* SECTION Respect */}
        <div className="about__main-container__para">
          <div className="about__main-container__para__bloc-title">
            <h3 className="about__main-container__para__bloc-title_title">
              Respect
            </h3>
            <div
              className="about__main-container__para__bloc-title_bloc-icon"
              onClick={(evt) => openModal(evt, "respect")}
            >
              <img
                src={chevron}
                alt="icon"
                id="respect"
                className="about__main-container__para__bloc-title_bloc-icon_icon"
              />
            </div>
          </div>
          <div className="about__main-container__para__bloc-modal respect">
            <p className="about__main-container__para__bloc-modal_p">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        {/* SECTION Service */}
        <div className="about__main-container__para">
          <div className="about__main-container__para__bloc-title">
            <h3 className="about__main-container__para__bloc-title_title">
              Service
            </h3>
            <div
              className="about__main-container__para__bloc-title_bloc-icon"
              onClick={(evt) => openModal(evt, "service")}
            >
              <img
                src={chevron}
                alt="icon"
                id="service"
                className="about__main-container__para__bloc-title_bloc-icon_icon"
              />
            </div>
          </div>
          <div className="about__main-container__para__bloc-modal service">
            <p className="about__main-container__para__bloc-modal_p">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N&apos;hésitez pas à nous contacter si vous
              avez la moindre question.
            </p>
          </div>
        </div>
        {/* SECTION Sécurité */}
        <div className="about__main-container__para">
          <div className="about__main-container__para__bloc-title">
            <h3 className="about__main-container__para__bloc-title_title">
              Securité
            </h3>
            <div
              className="about__main-container__para__bloc-title_bloc-icon"
              onClick={(evt) => openModal(evt, "securite")}
            >
              <img
                src={chevron}
                alt="icon"
                id="securite"
                className="about__main-container__para__bloc-title_bloc-icon_icon"
              />
            </div>
          </div>
          <div className="about__main-container__para__bloc-modal securite">
            <p className="about__main-container__para__bloc-modal_p">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
              vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
