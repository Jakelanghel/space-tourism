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

  h1 {
    font-size: 4rem;
  }

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
    padding-bottom: 2rem;
    border-bottom: solid 1px var(--grey);
  }

  .container-stats {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  .title-sml {
    margin-bottom: 0.5rem;
  }

  .data {
    font-family: "Bellefair", serif;
    font-size: 2.25rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
`;
