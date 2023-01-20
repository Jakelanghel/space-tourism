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

  .home-title {
    font-size: 6rem;
    margin-bottom: 1.5rem;
  }

  .home-subtitle {
    display: block;
    font-size: 1.35rem;
    font-weight: 300;
    letter-spacing: 2.75px;
    text-transform: uppercase;
    color: var(--off-white);
    font-family: "Barlow Condensed", sans-serif;
    margin-bottom: 1.5rem;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-btn {
    margin-top: 3.5rem;
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

  @media screen and (min-width: 475px) {
    background-image: url(${images.bgHomeTablet});
  }

  @media screen and (min-height: 800px) {
    .container-btn {
      margin-top: 5.5rem;
    }
  }

  @media screen and (min-height: 840px) {
    .container-btn {
      margin-top: 8rem;
    }
  }

  @media screen and (min-height: 900px) {
    .container-btn {
      margin-top: 8.5rem;
    }
  }

  /* TABLET =================================================*/

  @media screen and (min-width: 800px) {
    background-image: url(${images.bgHomeTablet});
    background-repeat: no-repeat;
    background-size: cover;

    text-align: center;
    color: var(--off-white);

    .home-subtitle {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .home-title {
      font-size: 10rem;
      margin-bottom: 0.5rem;
    }

    .title-sml {
      text-align: center;
    }

    .container-btn {
      margin-top: 8rem;
    }
  }

  /* DESKTOP ================================================*/
  @media screen and (min-width: 1025px) {
    text-align: left;

    background-image: url(${images.bgHomeDesktop});
    background-position: right -300px center;

    .container {
      flex-direction: row;
      justify-content: space-between;
      padding-top: 10rem;
    }

    .home-subtitle {
      margin-bottom: 2rem;
    }

    .home-title {
      margin-bottom: 1rem;
    }

    .title-sml {
      text-align: center;
    }

    .container-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 11rem;
      position: relative;
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
      width: 225px;
      height: 225px;
      z-index: 1;
      position: relative;
    }

    .btn-background {
      border-radius: 50%;
      width: 335px;
      height: 335px;
      background-color: #24262f;
      position: absolute;
      bottom: -45px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 0;
      opacity: 0;
    }
  }

  .explore-btn:hover + .btn-background {
    opacity: 1;
  }

  .explore-btn:hover {
    cursor: pointer;
  }
`;
