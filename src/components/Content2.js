import * as React from "react";
import Box from "@mui/material/Box";

export default function Content2() {
  return (
    <Box
      sx={{
        width: 400,
        height: 250,
        display: { sm: "inline-block" },
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
