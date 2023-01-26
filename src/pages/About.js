import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styling/portfolio.css";

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
        </Box>
      </Container>
    </React.Fragment>
  );
}
