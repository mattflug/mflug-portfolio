import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styling.css";
import Pic from "../assets/prof-pic.jpeg"

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          className="blue-box-about"
          sx={{
            bgcolor: "#cfe8fc",
            height: {
              xs: "160vh",
              sm: "140vh",
              md: "120vh",
              lg: "105vh",
              xl: "150vh",
            },
          }}
        >
          <img className="about-content1" src={Pic} alt="Matt's Resume"></img>
          <div className="about-content2">
            <h1 className="about1">About</h1>

            <h2 className="about2">
              I'm a Full-Stack developer from Denver CO. Right now, I'm building
              with React and MongoDB to sharpen my skills. Please reach out if
              you'd like to collaborate on a project!
            </h2>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
