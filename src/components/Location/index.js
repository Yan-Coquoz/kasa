import React from "react";
import { datas } from "../../data/datas";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Identity from "./Identity";
import "./style.scss";

const Location = () => {
    const { id } = useParams();

    const locData = datas.filter((data) => {
        return data.id === id;
    });

    const oneLocation = locData[0];

    return (
        <div>
            slider
            <div>
                <Title {...oneLocation} />
                <Identity {...oneLocation} />
            </div>
            <div>modales</div>
        </div>
    );
};

export default Location;
