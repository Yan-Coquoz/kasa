import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Title from "../Title";
import Identity from "../Identity";
import Modale from "../Modale";
import Slider from "../Slider";
import Loader from "../Loader";

import "./style.scss";

// const URLLocations ="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
const jsonDatas = "/datas.json";

const Location = () => {
    const { id } = useParams();
    // le Loader
    const [dataLoading, setDataLoading] = useState(true);

    const [hasFetchFirst, setHasFetchFirst] = useState(false);
    const [hasError, setHasError] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    // data BDD
    const [getDatas, setGetDatas] = useState(null);
    //  datas d'une location
    const [oneLocation, setOneLocation] = useState(null);

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
            const locData = getDatas.filter((data) => {
                return data.id === id;
            });
            setOneLocation(locData[0]);
        }
    }, [getDatas]);

    return (
        <div className="location">
            {dataLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="location__slider">
                        <Slider {...oneLocation} />
                    </div>

                    <div className="location__header">
                        <Title {...oneLocation} />
                        <Identity {...oneLocation} />
                    </div>
                    <div className="location__modals">
                        <Modale
                            id="desc"
                            title="Description"
                            comment={oneLocation.description}
                        />
                        <Modale
                            id="utils"
                            comment={oneLocation.equipments}
                            title="Équipements"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Location;
