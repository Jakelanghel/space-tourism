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

  .container-close-btn {
    margin-left: auto;
  }

  .close-icon {
    width: 55px;
    padding: 1rem;
  }

  .container-nav-links {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .nav-link {
    font-size: 1.45rem;
    color: var(--off-white);
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 1px;
    margin-bottom: 2rem;

    span {
      font-size: 1.25rem;
      font-weight: 900;
      margin-right: 1rem;
      letter-spacing: 3px;
    }
  }

  .menu-icon {
    padding: 1rem 1.5rem;
  }

  .menu-icon:hover {
    cursor: pointer;
  }
`;
