import React, { useEffect, useState } from "react";
import datas from "../../Data";
import { useParams } from "react-router-dom";
import Title from "../Title";
import Identity from "../Identity";
import Modale from "../Modale";
import Slider from "../Slider";
import Loader from "../Loader";

import "./style.scss";

const Location = () => {
    const [dataLoading, setDataLoading] = useState(false);
    const { id } = useParams();

    // const jsonDatas = "/datas.json";
    // // call API
    // useEffect(() => {
    //     async function getFetch() {
    //         const apiCall = await fetcher(jsonDatas);
    //         setAllDatas({ apiData: apiCall });
    //     }
    //     getFetch();
    // }, []);

    const locData = datas.filter((data) => {
        return data.id === id;
    });

    const oneLocation = locData[0];

    // loader
    useEffect(() => {
        if (Array.isArray(datas) && datas.length <= 0) {
            setDataLoading(true);
        }
        setDataLoading(false);
    }, [oneLocation]);

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
