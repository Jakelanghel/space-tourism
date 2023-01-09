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

  .container-img {
    width: 70%;
    margin: 2rem auto;
  }

  .planet-img {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  li {
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--off-white);
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    padding: 8px 0;
  }

  li:hover {
    cursor: pointer;
  }

  .active {
    border-bottom: solid 2px var(--off-white);
  }

  .container-description {
    padding-bottom: 2rem;
    border-bottom: solid 1px var(--grey);
  }

  .container-stats {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  .sub-title {
    text-transform: uppercase;
    color: var(--off-white);
    margin-bottom: 1rem;
  }

  .data {
    font-family: "Bellefair", serif;
    font-size: 2.25rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
`;
