import React from "react";
import { StyledNav } from "./Nav.Styled";
import { NavLink } from "react-router-dom";
import { images } from "../../constants/images";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "../../variants/navVariants";

const Nav = (props) => {
  const toggleNav = () => {
    props.setNavIsOpen((oldState) => !oldState);
  };
  return (
    <StyledNav>
      <div className="container-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="container-menu-icon">
        <img
          src={images.menuIcon}
          alt="open nav menu"
          className="menu-icon"
          onClick={toggleNav}
        />
      </div>

      <AnimatePresence mode="wait">
        {props.navIsOpen ? (
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container-menu"
          >
            <div className="container-close-btn">
              <img
                src={images.closeIcon}
                alt="close nav menu"
                className="filter-white close-icon"
                onClick={toggleNav}
              />
            </div>

            <div className="container-nav-links">
              <NavLink to="/" className="nav-link" onClick={toggleNav}>
                <span>00</span>Home
              </NavLink>
              <NavLink
                to="/destination"
                className="nav-link"
                onClick={toggleNav}
              >
                <span>01</span>Destination
              </NavLink>
              <NavLink to="/crew" className="nav-link" onClick={toggleNav}>
                <span>02</span>Crew
              </NavLink>
              <NavLink
                to="/technology"
                className="nav-link"
                onClick={toggleNav}
              >
                <span>03</span>Technology
              </NavLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </StyledNav>
  );
};

export default Nav;
