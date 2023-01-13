import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavLinks } from "./NavLinks.Styled";
import { images } from "../../../constants/images";

const NavLinks = (props) => {
  return (
    <StyledNavLinks>
      <div className="container-close-btn">
        <img
          src={images.closeIcon}
          alt="close nav menu"
          className="filter-white close-icon"
          onClick={props.toggleNav}
        />
      </div>

      <div className="container-nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
          onClick={props.toggleNav}
        >
          <span>00</span>Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
          onClick={props.toggleNav}
        >
          <span>01</span>Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
          onClick={props.toggleNav}
        >
          <span>02</span>Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
          onClick={props.toggleNav}
        >
          <span>03</span>Technology
        </NavLink>
      </div>
    </StyledNavLinks>
  );
};

export default NavLinks;
