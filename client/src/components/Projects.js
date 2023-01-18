import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className="big-box" sx={{ bgcolor: "#cfe8fc", height: "25vh" }}>
          <Stack spacing={3}>
            <Item>Logos</Item>
            <Item>Project 1</Item>
            <Item>Project 2</Item>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
