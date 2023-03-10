import React, { useState } from "react";
import { StyledCrew } from "./Crew.Styled";
import MotionDiv from "../page-animation/MotionDiv";
import { images } from "../../../constants/images";
import data from "../../../local-json/data.json";
import { pageVariants } from "../../../variants/pageVariants";

const Crew = (props) => {
  const crewArr = data.crew;
  const [currentIndex, setCurrentIndex] = useState(0);
  const crewImgArr = [
    images.douglas,
    images.mark,
    images.victor,
    images.anousheh,
  ];

  const handleClick = (e) => {
    const dotId = e.target.id;
    props.setActive(".dot", dotId);
    setCurrentIndex(dotId);
  };

  return (
    <MotionDiv variants={pageVariants}>
      <StyledCrew className="page-padding">
        <h2 className="page-title">
          <span>02</span>meet your crew
        </h2>

        <div className="container">
          <div className="container-copy">
            <h1 className="name">
              <span className="role">{crewArr[currentIndex].role}</span>
              {crewArr[currentIndex].name}
            </h1>
            <p>{crewArr[currentIndex].bio}</p>
          </div>

          <div className="container-img">
            <img
              src={crewImgArr[currentIndex]}
              alt={`crew member ${crewArr[currentIndex].name}`}
              className="crew-member-img"
            />
          </div>

          <div className="container-slider">
            <img
              src={images.circle}
              alt=""
              id="0"
              className="dot active"
              onClick={handleClick}
            />
            <img
              src={images.circle}
              alt=""
              id="1"
              className="dot"
              onClick={handleClick}
            />
            <img
              src={images.circle}
              alt=""
              id="2"
              className="dot"
              onClick={handleClick}
            />
            <img
              src={images.circle}
              alt=""
              id="3"
              className="dot"
              onClick={handleClick}
            />
          </div>
        </div>
      </StyledCrew>
    </MotionDiv>
  );
};

export default Crew;
