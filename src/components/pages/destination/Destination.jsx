import React, { useState } from "react";
import { StyledDestination } from "./Styled.Destination";
import { images } from "../../../constants/images";
import { pageVariants } from "../../../variants/pageVariants";
import MotionDiv from "../page-animation/MotionDiv";
import data from "../../../local-json/data.json";

const Destination = (props) => {
  const destinationsArr = data.destinations;

  const [currentIndex, setCurrentIndex] = useState(0);
  const planetImages = [images.moon, images.mars, images.europa, images.titan];

  const handleClick = (e) => {
    const planetId = e.target.id;
    props.setActive(".planet", planetId);
    setCurrentIndex(planetId);
  };

  return (
    <MotionDiv variants={pageVariants}>
      <StyledDestination className="page-padding">
        <h2 className="page-title">
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
              <h1 className="planet-name">
                {destinationsArr[currentIndex].name}
              </h1>
              <p className="planet-description">
                {destinationsArr[currentIndex].description}
              </p>
            </div>

            <div className="container-stats">
              <div className="stat mg-btm">
                <p className="stat-title">avg. distance</p>
                <p className="data">{destinationsArr[currentIndex].distance}</p>
              </div>

              <div className="stat">
                <p className="stat-title">est travel time</p>
                <p className="data">{destinationsArr[currentIndex].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </StyledDestination>
    </MotionDiv>
  );
};

export default Destination;
