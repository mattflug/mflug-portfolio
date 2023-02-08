import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../components/styling/portfolio.css";
import Pic from "../assets/prof-pic.jpeg"

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
          <img src={Pic} alt=""></img>
          <h1 className="welcome">
           About
          </h1>

          <h2 className="welcome">
            I'm a Full-Stack developer from Denver CO. Right now, I'm building
            with React and MongoDB to sharpen my skills. Please reach out if
            you'd like to collaborate on a project!
          </h2>
        </Box>
      </Container>
    </React.Fragment>
  );
}
