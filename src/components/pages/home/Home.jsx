import React from "react";
import { StyledHome } from "./Home.Styled";
import data from "../../local-json/data";

const Home = () => {
  console.log(data);

  return (
    <StyledHome>
      <div className="container">
        <div className="container-copy">
          <h1>
            <span>so you want to travel to</span>space
          </h1>
          <p>
            Lest face it, fi you want to go to space, you might as well
            genuinely go to outer space and not hover kind fo on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="container-btn">
          <button>explore</button>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
