import React, { useState } from "react";
import { StyledTechnology } from "./Styled.Technology";
import PageAnimation from "../../shared/page-animation/PageAnimation";
import { images } from "../../../constants/images";
import data from "../../../local-json/data.json";

const Technology = (props) => {
  const techArr = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);
  const techImages =
    window.screen.width <= 900
      ? [images.launchLan, images.spacePortLan, images.spaceCapsuleLan]
      : [images.launchPor, images.spacePortPor, images.spaceCapsulePor];

  const handleClick = (e) => {
    const id = e.target.id;
    console.log(id);
    props.setActive(".btn", id);
    setCurrentIndex(id);
  };

  return (
    <PageAnimation>
      <StyledTechnology className="page-padding">
        <h2 className="title-sml">
          <span>03</span>space launch 101
        </h2>

        <div className="container">
          <div className="container-btns">
            <button className="btn active" id="0" onClick={handleClick}>
              1
            </button>
            <button className="btn" id="1" onClick={handleClick}>
              2
            </button>
            <button className="btn" id="2" onClick={handleClick}>
              3
            </button>
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
    </PageAnimation>
  );
};

export default Technology;
