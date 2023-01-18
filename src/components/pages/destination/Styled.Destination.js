import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledDestination = styled.main`
  text-align: center;
  background-color: var(--black);
  background-image: url(${images.bgDestMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  color: var(--white);

  .planet-name {
    font-size: 4rem;
  }

  .container-img {
    width: 70%;
    margin: 2rem auto;
  }

  .planet-img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  ul {
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0 2rem;
    padding-bottom: 2rem;
    margin: 0 auto;
  }

  li {
    color: var(--off-white);
    font-size: 1.25rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    padding: 8px 0;
  }

  li:hover {
    cursor: pointer;
    color: var(--white);
    border-bottom: solid 2px var(--off-white);
  }

  .active {
    color: var(--white);
    border-bottom: solid 2px var(--off-white);
  }

  .container-description {
    max-width: 550px;
    padding-bottom: 2rem;
    margin: 0 auto;
    border-bottom: solid 1px var(--grey);
  }

  .container-stats {
    padding: 2rem 0;
  }

  .mg-btm {
    margin-bottom: 3rem;
  }

  .stat-title {
    font-size: 1.15rem;
    font-weight: 300;
    letter-spacing: 2.75px;
    text-transform: uppercase;
    color: var(--off-white);
    font-family: "Barlow Condensed", sans-serif;
    margin-bottom: 0.5rem;
  }

  .data {
    font-family: "Bellefair", serif;
    font-size: 2.25rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 800px) {
    background-image: url(${images.bgDestTablet});
    ul {
      padding: 2rem;
      padding-bottom: 2rem;
      margin: 0 auto;
    }

    li {
      font-size: 1.5rem;
      padding: 1rem 0;
    }

    p {
      max-width: 650px;
    }

    .planet-name {
      font-size: 6rem;
      margin: 0.5rem 0;
    }

    .container-description {
      max-width: 750px;
    }

    .container-stats {
      width: 500px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }

    .planet-img {
      max-width: 350px;
    }
  }
`;
