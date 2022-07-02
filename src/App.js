import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/styles/GlobalStyles";

import Home from "./pages/Home.component";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
