import React, { useState, useEffect } from "react";
import "./../App.css";
import axios from "axios";
const Card = ({ value }) => {
  const [base_experience, setBase_experience] = useState();
  const [abilities, setAbilities] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [imgUrl, setImgUrl] = useState();
  const fetchData = async () => {
    await axios.get(value.url).then((res) => {
      setBase_experience(res.data.base_experience);
      setAbilities(res.data.abilities);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setImgUrl(res.data.sprites.other.home.front_default);
    });
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <>
      <div className="card">
        <img className="image" src={imgUrl} alt="pokemon image" />

        <h1 className="name">{value.name}</h1>
        <div className="list">
          <li>base_experience:{base_experience}</li>
          <li>weight:{weight}</li>
          <li>height:{height}</li>
          <li >
            <div className="sublist">
              abilities:
              {abilities &&
                abilities.map((v, i) => {
                  return <span key={i}>{v.ability.name}</span>;
                })}
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default Card;
