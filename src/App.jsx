import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyles } from "./components/shared/global";
import Home from "./components/pages/home/Home";
import Destination from "./components/pages/destination/Destination";
import Crew from "./components/pages/crew/Crew";
import Technology from "./components/pages/technology/Technology";
import Nav from "./components/nav/Nav";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const setActive = (query, id) => {
    const elementsArr = document.querySelectorAll(`${query}`);
    elementsArr.forEach((element) => element.classList.remove("active"));
    document.getElementById(`${id}`).classList.add("active");
  };

  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <Nav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route base path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination setActive={setActive} />}
          />
          <Route path="/crew" element={<Crew setActive={setActive} />} />
          <Route
            path="/technology"
            element={<Technology setActive={setActive} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
