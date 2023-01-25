import * as React from "react";
import Box from "@mui/material/Box";
import "./styling/content1.css";

export default function Content1() {
  return (
    <Box className="margin1"
      sx={{
        width: 450,
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
