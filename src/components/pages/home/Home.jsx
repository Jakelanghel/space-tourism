import React from "react";
import { StyledHome } from "./Home.Styled";
import MotionDiv from "../page-animation/MotionDiv";
import { pageVariants } from "../../../variants/pageVariants";

const Home = () => {
  return (
    <MotionDiv variants={pageVariants}>
      <StyledHome className="page-padding">
        <div className="container">
          <div className="container-copy">
            <span className="title-sml">so, you want to travel to</span>
            <h1>space</h1>
            <p>
              Lest face it, if you want to go to space, you might as well
              genuinely go to outer space and not hover kind fo on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="container-btn">
            <button className="explore-btn">explore</button>
            <div className="btn-background"></div>
          </div>
        </div>
      </StyledHome>
    </MotionDiv>
  );
};

export default Home;
