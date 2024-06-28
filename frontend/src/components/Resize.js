import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { resizeImage } from "../api/index.js";

const Resize = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

  const handleResize = async (event) => {
    event.preventDefault();
    if (selectedImage) {
      try {
        const resizedImageData = await resizeImage(
          selectedImage,
          dimensions.width,
          dimensions.height
        );

        console.log(resizedImageData);

        setResizedImage(resizedImageData);
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resizedImage;
    link.download = "resized_image.jpg";
    link.click();
  };

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Resize Image
      </Typography>
      <Box
        component="form"
        onSubmit={handleResize}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <input
          type="file"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <TextField
          label="Height"
          variant="outlined"
          name="height"
          required={true}
          value={dimensions.height}
          onChange={(e) =>
            setDimensions({ ...dimensions, height: e.target.value })
          }
        />
        <TextField
          label="Width"
          variant="outlined"
          name="width"
          required={true}
          value={dimensions.width}
          onChange={(e) =>
            setDimensions({ ...dimensions, width: e.target.value })
          }
        />
        <Button
          className="button-submit"
          variant="contained" // Corrected from "container" to "contained"
          color="primary"
          size="large"
          type="submit"
        >
          + resize
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleDownload}
          disabled={!resizedImage}
        >
          Download
        </Button>
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders the resized image.
        {resizedImage && <img src={resizedImage} alt="Resized" />}
      </Box>
    </Box>
  );
};

export default Resize;
