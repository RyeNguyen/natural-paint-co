import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import {domAnimation, LazyMotion} from "framer-motion"

import Home from "./pages/Home.component";

const App = () => {
  return (
    <LazyMotion strict features={domAnimation}>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </LazyMotion>
  );
};

export default App;
