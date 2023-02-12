import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../components/Portfolio.css";
import Pic from "../"

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          className="big-box-about"
          sx={{ bgcolor: "#cfe8fc", height: "120vh" }}
        >
          <img className="massive" src={Pic} alt=""></img>
          <div className="side-box">
            <h1 className="about">About</h1>

            <h2 className="about">
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
