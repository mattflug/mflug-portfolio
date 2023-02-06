import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../components/styling/portfolio.css";

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
          <img
            src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-947663966-e1621956778415.jpg?fit=750%2C380&strip=all"
            alt=""
          ></img>

          <h1 className="welcome">Welcome to mflug's portfolio!</h1>
        </Box>
      </Container>
    </React.Fragment>
  );
}
