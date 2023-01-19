import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledCrew = styled.main`
  text-align: center;
  background-image: url(${images.bgCrewMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 6rem;

  .name {
    font-size: 1.75rem;
    color: var(--white);
    margin-bottom: 1rem;

    .role {
      font-size: 1.15rem;
      color: var(--grey);
      display: block;
      margin-bottom: 0.5rem;
    }
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
    max-width: 100px;
    display: flex;
    justify-content: space-between;
    margin: 2.25rem auto;
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

  .dot:hover {
    filter: invert(48%) sepia(7%) saturate(220%) hue-rotate(193deg)
      brightness(97%) contrast(87%);
  }

  .active {
    filter: invert(99%) sepia(96%) saturate(2%) hue-rotate(210deg)
      brightness(107%) contrast(100%);
  }

  @media screen and (min-width: 800px) {
    background-image: url(${images.bgCrewTablet});
    padding-bottom: 0;

    .container-copy {
      order: 1;
    }

    .container-slider {
      order: 2;
      margin-bottom: 5rem;
    }

    .container-img {
      order: 3;
      width: 100%;
      border: none;
    }

    .name {
      font-size: 2.5rem;
      margin-bottom: 1rem;

      .role {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
    }

    .crew-member-img {
      height: auto;
      object-fit: cover;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 1025px) {
    text-align: left;
    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .container-img {
      width: 45%;
    }

    .container-copy {
      width: 45%;
    }

    .container-slider {
      position: absolute;
      bottom: 0;
    }
  }
`;
