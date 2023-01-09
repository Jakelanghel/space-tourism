import React, { useState } from "react";
import { StyledTechnology } from "./Styled.Technology";
import data from "../../../local-json/data.json";
import { images } from "../../../constants/images";

const Technology = () => {
  const techArr = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);
  const techImages =
    window.screen.width <= 900
      ? [images.launchLan, images.spacePortLan, images.spaceCapsuleLan]
      : [images.launchPor, images.spacePortPor, images.spaceCapsulePor];

  console.log(window.screen.width);

  return (
    <StyledTechnology className="page-padding">
      <h2 className="title-sml">
        <span>03</span>space launch 101
      </h2>

      <div className="container">
        <div className="container-btns">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>

        <div className="container-copy">
          <h3>the terminology...</h3>
          <h1>{techArr[currentIndex].name}</h1>
          <p>{techArr[currentIndex].description}</p>
        </div>

        <div className="container-img">
          <img src={techImages[currentIndex]} alt="" className="tech-img" />
        </div>
      </div>
    </StyledTechnology>
  );
};

export default Technology;
