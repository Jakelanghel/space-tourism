import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledTechnology = styled.main`
  background-image: url(${images.bgTechMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 7rem;

  .page-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .page-title {
    margin-bottom: 1rem;
  }

  .title,
  .subtitle {
    color: var(--white);
  }

  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Barlow Condensed", sans-serif;
    margin-bottom: 0.75rem;
  }

  button {
    font-size: 1.25rem;
    color: var(--white);
    font-family: "Bellefair", serif;
    background-color: transparent;
    border: solid 2px var(--grey);
    padding: 0.75rem 1.5rem;
    border-radius: 50%;
  }

  button:hover {
    cursor: pointer;
    border: solid 2px var(--white);
  }

  .active {
    background-color: var(--white);
    color: var(--black);
    border: solid 2px var(--white);
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-img {
    order: 1;
    width: 100%;
    margin: 2rem 0;
  }

  .tech-img {
    width: 100%;
    object-fit: cover;
  }

  .container-btns {
    order: 2;
    width: 215px;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
    margin-bottom: 2rem;
  }

  .container-copy {
    order: 3;
    padding: 0 1rem;
  }

  .page-title {
    padding-left: 3rem;
  }
`;
