import React from "react";
import { StyledNav } from "./Nav.Styled";
import { NavLink } from "react-router-dom";
import { images } from "../../constants/images";

const Nav = () => {
  return (
    <StyledNav>
      <div className="container-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="container-nav-links">
        <NavLink to="/" className="nav-link">
          <span>00</span>Home
        </NavLink>
        <NavLink to="/" className="nav-link">
          <span>01</span>Destination
        </NavLink>
        <NavLink to="/" className="nav-link">
          <span>02</span>Crew
        </NavLink>
        <NavLink to="/" className="nav-link">
          <span>03</span>Technology
        </NavLink>
      </div>
    </StyledNav>
  );
};

export default Nav;
