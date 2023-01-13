import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 1.5rem;
  padding-right: 0;
  z-index: 1;

  .container-menu {
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
`;
