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
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "44vh" }}>
          <div >
            <Content1 />
          </div>
          <div >
            <Content2 />
          </div>
        </Box>
        <Projects />
      </Container>
    </React.Fragment>
  );
}
