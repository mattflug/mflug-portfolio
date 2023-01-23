import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import "./styling/portfolio.css";
import Logos from "../components/Logos";

export default function Portfolio() {
  return (
    <React.Fragment className="content-display">
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
          <div className="a-box">
            <Content1 />
          </div>
          <div className="b-box">
            <Content2 />
          </div>
        </Box>
        <Logos />
      </Container>
    </React.Fragment>
  );
}
