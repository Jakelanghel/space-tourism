import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledHome = styled.main`
  width: 100%;
  width: 100vw;
  min-height: 100vh;

  background-color: var(--black);
  background-image: url(${images.bgHomeMobile});
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;
  color: var(--off-white);

  span {
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 5.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 350px;
    margin: 0 auto;
  }

  .container-btn {
    margin-top: 5rem;
    padding-bottom: 66px;
  }

  .explore-btn {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--black);
    font-family: "Bellefair", serif;
    letter-spacing: 2px;
    background-color: var(--off-white);
    border: none;
    border-radius: 50%;
    width: 216px;
    height: 200px;
    z-index: 1;
    position: relative;
  }

  .explore-btn:hover + .btn-background {
    opacity: 1;
  }

  .btn-background {
    border-radius: 50%;
    width: 316px;
    height: 300px;
    background-color: #24262f;
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    opacity: 0;
  }

  @media screen and (min-height: 800px) {
    padding-bottom: 1rem;
  }
  @media screen and (min-height: 850px) {
    padding-bottom: 2rem;
  }

  @media screen and (min-height: 900px) {
    padding-bottom: 3rem;
  }
`;
