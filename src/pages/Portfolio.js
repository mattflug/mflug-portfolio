import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


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
            height: "100vh",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            alignItems: { xs: "center" },
          }}
        >
          <img
            src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-947663966-e1621956778415.jpg?fit=750%2C380&strip=all"
            alt=""
          ></img>

          <h1 className="welcome">Welcome to mflug's portfolio!</h1>
        </Box>
        <Projects className="projects" />
      </Container>
    </React.Fragment>
  );
}
