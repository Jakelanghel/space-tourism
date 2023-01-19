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

  @media screen and (min-width: 800px) {
    padding: 1.5rem 3rem;

    .container-menu-icon {
      display: none;
    }
    .container-menu {
      height: auto;
      flex-direction: column;
      position: absolute;
      background-color: #151923;
      padding: 0 3rem;
      z-index: 01;
    }
  }

  @media screen and (min-width: 1025px) {
    padding: 1.5rem 3rem;
    .container-menu {
      width: 65%;
      height: auto;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(40px);
      padding: 0;
    }
  }
`;
