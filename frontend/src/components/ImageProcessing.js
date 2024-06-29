import React from "react";
import { Box, Stack } from "@mui/material";

import ImageBlending from "./ImageBlending";

const ImageProcessing = () => {
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Stack spacing={6}>
        <ImageBlending />
      </Stack>
    </Box>
  );
};

export default ImageProcessing;
