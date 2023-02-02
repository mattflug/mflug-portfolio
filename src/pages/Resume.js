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
        <Box className="resume-box" sx={{ bgcolor: "#cfe8fc", height: "136vh" }}>
          <img className="resume" src={resume} alt="resume" />
        </Box>
      </Container>
    </React.Fragment>
  );
}
