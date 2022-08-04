import React from "react";
import { datas } from "../../data/datas";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Identity from "./Identity";
import Modale from "../Modale";
import Slider from "./Slider";
import "./style.scss";

const Location = () => {
    const { id } = useParams();

    const locData = datas.filter((data) => {
        return data.id === id;
    });

    const oneLocation = locData[0];

    return (
        <div className="location">
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
        </div>
    );
};

export default Location;
