import * as React from "react";
import Box from "@mui/material/Box";

export default function Content1() {
  return (
    <Box
      margin={1}
      sx={{
        width: { xs: 500, sm: 400, md: 600, lg: 800, xl: 1000 },
        height: { xs: 800, sm: 500, md: 500, lg: 500, xl: 500 },
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
