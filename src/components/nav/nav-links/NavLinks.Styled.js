import styled from "styled-components";

export const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: column;

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
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-bottom: solid 2.5px transparent;

    span {
      font-size: 1.25rem;
      font-weight: 900;
      margin-right: 1rem;
      letter-spacing: 3px;
    }
  }

  .nav-link:hover {
    cursor: pointer;
    border-bottom: solid 2.5px var(--grey);
  }

  .active {
    border-bottom: solid 2.5px var(--white);
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: center;

    .container-nav-links {
      flex-direction: row;
      gap: 1rem;
      margin-top: 0;
    }

    .container-close-btn {
      display: none;
    }

    .nav-link {
      margin-bottom: 0;
      padding: 2rem 1.5rem;

      span {
        display: none;
      }
    }
  }
`;
