import { Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";

import { blendImages } from "../api/index";

const ImageBlending = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [blendedImage, setBlendedImage] = useState(null);

  const handleBlend = async (event) => {
    event.preventDefault();
    console.log("Blending images...");

    try {
      const blendedImageData = await blendImages(image1, image2);
      setBlendedImage(blendedImageData);
    } catch (error) {
      console.error("Error blending image:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Blend Images
      </Typography>
      <Box
        component="form"
        onSubmit={handleBlend}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <input type="file" onChange={(e) => setImage1(e.target.files[0])} />
        <input type="file" onChange={(e) => setImage2(e.target.files[0])} />

        <Button
          className="button-submit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={!image1 || !image2}
        >
          {" "}
          Blend
        </Button>
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders the blended image.
        {blendedImage && <img src={blendedImage} alt="blended img" />}
      </Box>
    </Box>
  );
};

export default ImageBlending;
