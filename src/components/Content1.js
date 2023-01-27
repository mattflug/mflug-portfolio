import * as React from "react";
import Box from "@mui/material/Box";

export default function Content1() {
  return (
    <Box 
      sx={{
        width: 400,
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
