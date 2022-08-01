import React from "react";
import Carte from "../Carte";
import bg from "../../assets/mainBG.png";
import "./style.scss";
import { datas } from "../../data/datas.js";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__bloc">
                    <img
                        src={bg}
                        className="home__bloc-img"
                        alt="montagne et mer"
                    />
                    <span className="home__bloc-span">
                        Chez vous, partout et ailleurs
                    </span>
                </div>
                <div className="home__card-container">
                    {datas.map((data) => {
                        return (
                            <Carte
                                key={data.id}
                                title={data.title}
                                id={data.id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
