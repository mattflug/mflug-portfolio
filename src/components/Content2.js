import * as React from "react";
import Box from "@mui/material/Box";

export default function Content2() {
  return (
    <Box
      margin={1}
      sx={{
        width: { xs: 100, sm: 250, md: 300, lg: 400, xl: 500 },
        height: 250,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
