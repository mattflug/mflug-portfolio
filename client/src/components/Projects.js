import * as React from "react";
import Box from "@mui/material/Box";
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
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Item>Project 1</Item>
        <Item>Project 2</Item>
        <Item>Project 3</Item>
      </Stack>
    </Box>
  );
}