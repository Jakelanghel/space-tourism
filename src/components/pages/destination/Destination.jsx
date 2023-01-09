import React, { useState } from "react";
import { StyledDestination } from "./Styled.Destination";
import data from "../../../local-json/data.json";
import { images } from "../../../constants/images";

const Destination = (props) => {
  const destinationsArr = data.destinations;

  const [currentIndex, setCurrentIndex] = useState(0);
  const planetImages = [images.moon, images.mars, images.europa, images.titan];

  const handleClick = (e) => {
    const planet = e.target.textContent;
    const planetId = e.target.id;
    setCurrentIndex(planetId);
  };

  props.setActive(".planet", currentIndex);

  return (
    <StyledDestination className="page-padding">
      <h2 className="title-sml">
        <span>01</span>pick your destination
      </h2>

      <div className="container">
        <div className="container-img">
          <img
            src={planetImages[currentIndex]}
            alt="planet"
            className="planet-img"
          />
        </div>

        <div className="container-copy">
          <ul>
            <li id="0" className="planet active" onClick={handleClick}>
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
            <h1 className="title">{destinationsArr[currentIndex].name}</h1>
            <p className="description">
              {destinationsArr[currentIndex].description}
            </p>
          </div>

          <div className="container-stats">
            <p className="sub-title">avg. distance</p>
            <p className="data">{destinationsArr[currentIndex].distance}</p>
            <p className="sub-title">est travel time</p>
            <p className="data">{destinationsArr[currentIndex].travel}</p>
          </div>
        </div>
      </div>
    </StyledDestination>
  );
};

export default Destination;
