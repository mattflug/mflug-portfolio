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
      <Container className="break" maxWidth={false}>
        <Box
          className="big-box"
          sx={{
            bgcolor: "#cfe8fc",
            height: "50vh",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Content1 className="cont1" />

          <Content2 className="cont2" />
        </Box>
        <Projects className="projects" />
      </Container>
    </React.Fragment>
  );
}
