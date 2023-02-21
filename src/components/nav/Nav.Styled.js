import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 1.5rem;
  padding-right: 0;
  z-index: 1;

  .container-menu {
    width: 70%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(40px);
    padding: 2.5rem;
    z-index: 01;
  }

  .menu-icon {
    padding: 1rem 1.5rem;
  }

  .menu-icon:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 450px) {
    padding: 1.5rem 2rem;
    padding-right: 1rem;
  }

  @media screen and (min-width: 800px) {
    padding-left: 4rem;
    .container-menu-icon {
      display: none;
    }
    .container-menu {
      min-width: 600px;
      height: auto;
      flex-direction: column;
      position: absolute;
      background-color: #151923;
      padding: 0 3rem;
      z-index: 01;
    }
  }

  @media screen and (min-width: 1025px) {
    margin-top: 3rem;
    .container-menu {
      width: 50%;
      min-width: 700px;
      max-width: 800px;
      height: auto;
      background-color: rgba(72, 75, 84, 0.1);
      backdrop-filter: blur(20px);
      padding: 0;
    }

    .container-menu::before {
      content: "";
      width: 225px;
      height: 2px;
      background-color: var(--grey);
      position: absolute;
      top: 50%;
      left: -185px;
      transform: translateY(-50%);
    }
  }

  @media screen and (min-width: 1200px) {
    padding-left: 6rem;
    .container-menu::before {
      width: 350px;
      left: -300px;
    }
  }
  @media screen and (min-width: 1400px) {
    .container-menu::before {
      width: 500px;
      left: -475px;
    }
  }
`;
