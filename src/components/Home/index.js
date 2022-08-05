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
        <>
            {dataLoading ? (
                <Loader />
            ) : (
                <div className="home">
                    <div className="home__bloc">
                        <img
                            src={bg}
                            className="home__bloc-img"
                            alt="montagne et mer"
                        />
                        <span className="home__bloc-title">
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
                                    cover={data.cover}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
