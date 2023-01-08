import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledCrew = styled.main`
  text-align: center;
  background-image: url(${images.bgCrewMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-bottom: 7rem;

  h2 {
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container-slider {
    order: 2;
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
  }

  .container-slider:hover {
    cursor: pointer;
  }

  .dot {
    width: 45px;
    height: 45px;
    padding: 1rem;
    filter: invert(29%) sepia(10%) saturate(372%) hue-rotate(189deg)
      brightness(97%) contrast(86%);
  }

  .active {
    filter: invert(99%) sepia(96%) saturate(2%) hue-rotate(210deg)
      brightness(107%) contrast(100%);
  }

  .container-copy {
    order: 3;
  }

  h1 {
    font-size: 1.75rem;
    color: var(--white);
    margin-bottom: 1rem;

    span {
      font-size: 1.25rem;
      color: var(--grey);
      display: block;
      margin-bottom: 0.5rem;
    }
  }

  .container-img {
    order: 1;
    width: 100%;
    border-bottom: solid 1px var(--grey);
  }

  .crew-member-img {
    height: 300px;
    object-fit: cover;
    margin: 0 auto;
  }
`;
