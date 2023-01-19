import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavLinks from "./nav-links/NavLinks";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";
import { navVariants } from "../../variants/navVariants";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(
    window.screen.width < 800 ? true : false
  );

  const [navIsOpen, setNavIsOpen] = useState(isMobile ? false : true);

  const toggleNav = () => {
    isMobile ? setNavIsOpen((oldState) => !oldState) : null;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.screen.width;
      console.log(width);
      setNavIsOpen(window.screen.width >= 800 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(navIsOpen);

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
        {navIsOpen ? (
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container-menu"
          >
            <NavLinks toggleNav={toggleNav} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </StyledNav>
  );
};

export default Nav;
