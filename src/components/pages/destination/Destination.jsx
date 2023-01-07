import React, { useState } from "react";
import { StyledDestination } from "./Styled.Destination";
import data from "../../../local-json/data.json";
import { images } from "../../../constants/images";

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [planetData, setPlanetData] = useState(
    data.destinations[currentPlanet]
  );
  const planetImages = [images.moon, images.mars, images.europa, images.titan];

  const handleClick = (e) => {
    const planet = e.target.textContent;
    const planetId = e.target.id;
    setCurrentPlanet(planetId);
    setPlanetData(data.destinations[planetId]);
  };

  const getActive = () => {
    const planetsArr = document.querySelectorAll(".planet");
    planetsArr.forEach((planet) => {
      planetsArr.forEach((p) => {
        p.textContent === planetData.name
          ? p.classList.add("active")
          : p.classList.remove("active");
      });
    });
  };

  getActive();
  return (
    <StyledDestination className="page-padding">
      <h2 className="title-sml">
        <span>01</span>pick your destination
      </h2>

      <div className="container">
        <div className="container-img">
          <img
            src={planetImages[currentPlanet]}
            alt="planet"
            className="planet-img"
          />
        </div>

        <div className="container-copy">
          <ul>
            <li id="0" className="planet" onClick={handleClick}>
              Moon
            </li>
            <li id="1" className="planet" onClick={handleClick}>
              Mars
            </li>
            <li id="2" className="planet" onClick={handleClick}>
              Europa
            </li>
            <li id="3" className="planet" onClick={handleClick}>
              Titan
            </li>
          </ul>

          <div className="container-description">
            <h1 className="title">{planetData.name}</h1>
            <p className="description">{planetData.description}</p>
          </div>

          <div className="container-stats">
            <p className="sub-title">avg. distance</p>
            <p className="data">{planetData.distance}</p>
            <p className="sub-title">est travel time</p>
            <p className="data">{planetData.travel}</p>
          </div>
        </div>
      </div>
    </StyledDestination>
  );
};

export default Destination;
