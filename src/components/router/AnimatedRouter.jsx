import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/home/Home";
import Destination from "../pages/destination/Destination";
import Crew from "../pages/crew/Crew";
import Technology from "../pages/technology/Technology";
import { pageVariants } from "../../variants/pageVariants";

const AnimatedRouter = (props) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          base
          path="/https://jakelanghel.github.io/space-tourism"
          element={<Home variants={pageVariants} />}
        />
        <Route
          path="/destination"
          element={
            <Destination variants={pageVariants} setActive={props.setActive} />
          }
        />
        <Route
          path="/crew"
          element={<Crew variants={pageVariants} setActive={props.setActive} />}
        />
        <Route
          path="/technology"
          element={
            <Technology variants={pageVariants} setActive={props.setActive} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRouter;
