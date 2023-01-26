import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import "./styling/portfolio.css";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <React.Fragment className="border">
      <CssBaseline />
      <Container className="break" maxWidth="xl">
        <Box  sx={{ bgcolor: "#cfe8fc", height: "90vh" }}>
          <div className="big-box">
          <Content1 />

          <Content2 />
          </div >
        <Projects className="projects"/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
