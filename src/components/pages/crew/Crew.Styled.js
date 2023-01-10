import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledCrew = styled.main`
  text-align: center;
  background-image: url(${images.bgCrewMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 6rem;

  h1 {
    font-size: 1.75rem;
    color: var(--white);
    margin-bottom: 1rem;

    span {
      font-size: 1.15rem;
      color: var(--grey);
      display: block;
      margin-bottom: 0.5rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container-img {
    order: 1;
    width: 100%;
    border-bottom: solid 1px var(--grey);
  }

  .container-slider {
    order: 2;
  }

  .container-copy {
    order: 3;
  }

  .crew-member-img {
    height: 300px;
    object-fit: cover;
    margin: 0 auto;
  }

  .container-slider {
    width: 35%;
    display: flex;
    justify-content: space-between;
    margin: 1.5rem auto;
  }

  .container-slider:hover {
    cursor: pointer;
  }

  .dot {
    width: 28px;
    height: 28px;
    padding: 0.5rem;
    filter: invert(29%) sepia(10%) saturate(372%) hue-rotate(189deg)
      brightness(97%) contrast(86%);
  }

  .active {
    filter: invert(99%) sepia(96%) saturate(2%) hue-rotate(210deg)
      brightness(107%) contrast(100%);
  }
`;
