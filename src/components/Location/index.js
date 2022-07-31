import React from "react";
import { datas } from "../../data/datas";
import { useParams } from "react-router-dom";
import "./style.scss";

const Location = () => {
  //TODO récup de l'id dans l'URL
  // TODO rechercher l'id dans la BDD

  const { id } = useParams();

  const locData = datas.filter((data) => {
    return data.id === id;
  });
  console.log(locData);

  return (
    <div>
      <h2>la location {id}</h2>
    </div>
  );
};

export default Location;
