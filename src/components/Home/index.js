import React, { useEffect, useState } from "react";
import Carte from "../Carte";
import Loader from "../Loader";
import bg from "../../assets/mainBG.png";
import "./style.scss";
import datas from "../../Data";

const Home = () => {
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        if (!Array.isArray(datas) && datas.length === 0) {
            setDataLoading(true);
        }
        setDataLoading(false);
    }, []);

    return (
        <div className="home">
            {dataLoading ? (
                <Loader />
            ) : (
                <div className="home__bloc">
                    <div className="home__bloc__header">
                        <div className="home__bloc__header__bloc-img">
                            <img
                                src={bg}
                                className="home__bloc__header__bloc-img__img"
                                alt="montagne et mer"
                            />
                        </div>
                        <div className="home__bloc__header__title-bloc">
                            <p className="home__bloc__header__title-bloc__title">
                                Chez vous, partout et ailleurs
                            </p>
                        </div>
                    </div>

                    <div className="home__bloc__card-container">
                        {datas.map((data) => {
                            return (
                                <Carte
                                    key={data.id}
                                    title={data.title}
                                    id={data.id}
                                    cover={data.cover}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
