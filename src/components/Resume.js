import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styling.css";
import resume from "../assets/mbf-resume.jpg"
import resumepdf from "../assets/mbf-pdf.pdf"
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box
          className="resume-box"
          sx={{ bgcolor: "#cfe8fc", height: "170vh" }}
        >
          <h1 className="welcome">Resume</h1>
          <img className="resume" src={resume} alt="resume" />
          <a className="underline-res"href={resumepdf} download>
            <Button variant="contained">Download</Button>
          </a>
        </Box>
      </Container>
    </React.Fragment>
  );
}
