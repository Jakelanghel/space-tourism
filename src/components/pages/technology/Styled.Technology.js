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
  padding-top: 8rem;

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
    max-width: 500px;
    margin: 2rem auto;
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

  @media screen and (min-width: 800px) {
    padding-top: 12rem;

    .tech-img {
      height: 500px;
      object-position: center bottom;
    }
  }

  @media screen and (min-width: 1025px) {
    text-align: left;
    background-image: url(${images.bgTechDesktop});

    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left: 3rem;
    }

    .container-btns {
      order: 1;
      width: 10%;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2rem;
      margin: 0;
      margin-bottom: 0;
      padding-top: 5rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      padding: 0;
      height: 100px;
      width: 100px;
    }

    .container-copy {
      width: 35%;
      order: 2;
      padding: 0;
      padding-top: 5rem;
    }

    .container-img {
      width: 40%;
      order: 3;
      margin: 2rem 0;
    }

    .tech-img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1200px) {
    .page-title {
      padding-left: 5rem;
    }
    .container {
      padding-left: 5rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .title {
      font-size: 3.25rem;
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
  }
`;
