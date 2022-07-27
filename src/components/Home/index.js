import React from "react";

import bg from "../../assets/mainBG.png";
import "./style.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__bloc">
          <img src={bg} className="home__bloc-img" alt="montagne et mer" />
          <span className="home__bloc-span">
            Chez vous, partout et ailleurs
          </span>
        </div>
        <div>compo Carte</div>
      </div>
    </>
  );
};

export default Home;
