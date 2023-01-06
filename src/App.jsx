import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/shared/global";

import Home from "./components/pages/home/Home";
import Destination from "./components/pages/destination/Destination";
import Crew from "./components/pages/crew/Crew";
import Technology from "./components/pages/technology/Technology";

import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route base path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
