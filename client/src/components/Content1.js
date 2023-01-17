import * as React from "react";
import Box from "@mui/material/Box";

export default function Content1() {
  return (
    <Box
      sx={{
        width: 550,
        height: 500,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
