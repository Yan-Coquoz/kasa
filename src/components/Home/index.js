import React, { useEffect, useState } from "react";
import Carte from "../Carte";
import Loader from "../Loader";
import bg from "../../assets/mainBG.png";
import "./style.scss";
// import datas from "../../Data";

const jsonDatas = "/datas.json";

const Home = () => {
    const [dataLoading, setDataLoading] = useState(true);

    const [hasFetchFirst, setHasFetchFirst] = useState(false);
    const [hasError, setHasError] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [getDatas, setGetDatas] = useState(null);

    // Appel API
    useEffect(() => {
        const header = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
            },
        };
        if (!hasFetchFirst) {
            setHasFetchFirst(true);
            setHasError(false);
            setIsFetching(true);
            fetch(jsonDatas, header)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then((data) => {
                    setGetDatas(data);
                    setIsFetching(false);
                })
                .catch(() => setHasError(true));
        }
    });
    // loader
    useEffect(() => {
        if (hasError || !isFetching) {
            setDataLoading(true);
        }
        if (!hasError) {
            setDataLoading(false);
        }
    }, [getDatas]);

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
                        {getDatas.map((data) => {
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
