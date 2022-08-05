import React, { useEffect, useState } from "react";
import datas from "../../Data";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Identity from "./Identity";
import Modale from "../Modale";
import Slider from "../Slider";
import Loader from "../Loader";

import "./style.scss";

const Location = () => {
    const { id } = useParams();
    const [dataLoading, setDataLoading] = useState(false);

    const locData = datas.filter((data) => {
        return data.id === id;
    });
    useEffect(() => {
        if (!Array.isArray(datas) && datas.length === 0) {
            setDataLoading(true);
        }
        setDataLoading(false);
    }, []);
    const oneLocation = locData[0];

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
