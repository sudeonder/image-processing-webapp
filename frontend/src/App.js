import React from "react";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ImageProcessing from "./components/ImageProcessing";
import About from "./components/About";
import ImageBasics from "./components/ImageBasics";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="image-basics" element={<ImageBasics />} />
            <Route path="image-processing" element={<ImageProcessing />} />
            <Route path="about" element={<About />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}
