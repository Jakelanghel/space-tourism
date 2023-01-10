import React, { useState } from "react";
import { StyledDestination } from "./Styled.Destination";
import PageAnimation from "../../shared/page-animation/PageAnimation";
import { images } from "../../../constants/images";
import data from "../../../local-json/data.json";
import { pageVariants } from "../../../variants/pageVariants";

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
    <PageAnimation variants={pageVariants}>
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
              <h1>{destinationsArr[currentIndex].name}</h1>
              <p className="description">
                {destinationsArr[currentIndex].description}
              </p>
            </div>

            <div className="container-stats">
              <p className="title-sml">avg. distance</p>
              <p className="data">{destinationsArr[currentIndex].distance}</p>
              <p className="title-sml">est travel time</p>
              <p className="data">{destinationsArr[currentIndex].travel}</p>
            </div>
          </div>
        </div>
      </StyledDestination>
    </PageAnimation>
  );
};

export default Destination;
