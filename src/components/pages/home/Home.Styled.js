import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledHome = styled.main`
  width: 100%;
  width: 100vw;
  height: 100vh;

  background-color: var(--black);
  background-image: url(${images.bgHomeMobile});
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;
  color: var(--off-white);

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  span {
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 5.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 425px;
    margin: 0 auto;
  }

  .container-btn {
    margin-top: auto;
    padding-bottom: 1rem;
  }

  .explore-btn {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--black);
    font-family: "Bellefair", serif;
    letter-spacing: 2px;
    background-color: var(--off-white);
    padding: 5.5rem 3rem;
    border: none;
    border-radius: 50%;
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
