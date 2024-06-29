import React, { useState, useEffect } from "react";

import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import { drawShapes } from "../api/index.js";

const DrawShapes = () => {
  const [canvas1, setCanvas1] = useState(null);
  const [shape, setShape] = useState("circle");

  const shapes = [
    {
      value: "circle",
      label: "Circle",
    },
    {
      value: "rectangle",
      label: "Rectangle",
    },
    {
      value: "triangle",
      label: "Triangle",
    },
    {
      value: "line",
      label: "Line",
    },
    {
      value: "ellipse",
      label: "Ellipse",
    },
  ];

  const handleBlank = async (event) => {
    event.preventDefault();

    try {
      const blank = await drawShapes(shape);
      setCanvas1(blank);
    } catch (error) {
      console.error("Error resizing image:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Draw Shapes on Image
      </Typography>
      <Box
        component="form"
        onSubmit={handleBlank}
        noValidate
        autoComplete="off"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          select
          label="Select"
          helperText="Please select your shape"
          value={shape}
          onChange={(e) => setShape(e.target.value)}
        >
          {shapes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          Draw
        </Button>
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders the resized image
        {canvas1 && <img src={canvas1} alt="canvas" />}
      </Box>
    </Box>
  );
};

export default DrawShapes;
