import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";

export default function Portfolio() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} >
        <div className="abox">
          <Content1 />
        </div>
        <div className="bbox">
          <Content2 />
          </div>
          </Box>
      </Container>
    </React.Fragment>
  );
}
