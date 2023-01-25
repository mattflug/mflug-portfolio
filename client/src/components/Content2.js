import * as React from "react";
import Box from "@mui/material/Box";
import "./styling/content2.css";

export default function Content2() {
  return (
    <Box className="margin2"
      sx={{
        width: 500,
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
