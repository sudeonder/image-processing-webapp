import React from "react";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Resize from "./components/Resize";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="resize" element={<Resize />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}
