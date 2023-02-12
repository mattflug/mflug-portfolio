import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../components/Portfolio.css";
import Form from "../../components/Form";

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box className="big-contact" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
          <h1 className="welcome">Contact</h1>
          <Form />
        </Box>
      </Container>
    </React.Fragment>
  );
}
