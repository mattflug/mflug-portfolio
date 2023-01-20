import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styling/portfolio.css";

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          className="big-box"
          sx={{ bgcolor: "#cfe8fc", height: "74vh" }}
        ></Box>
      </Container>
    </React.Fragment>
  );
}
