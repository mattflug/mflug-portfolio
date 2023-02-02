import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styling/portfolio.css";
import resume from "../assets/mbf-resume.jpg"

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
          <h1>Resume</h1>
          <img src={resume} alt="resume" className="resume" />
        </Box>
      </Container>
    </React.Fragment>
  );
}
