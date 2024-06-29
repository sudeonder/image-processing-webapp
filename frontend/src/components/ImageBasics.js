import React from "react";
import { Box, Stack } from "@mui/material";

import Resize from "./Resize";
import DrawShapes from "./DrawShapes";

const ImageBasics = () => {
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Stack spacing={6}>
        <Resize />
        <DrawShapes />
      </Stack>
    </Box>
  );
};

export default ImageBasics;
