import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiHandlebarsdotjs,
  SiGithub,
} from "react-icons/si";
import { FaNode, FaNpm, FaReact } from "react-icons/fa";

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
      <Container maxWidth={false}>
        <Box  sx={{ bgcolor: "#cfe8fc", height: "25vh" }}>
          <Stack spacing={3}>
            <Item>
              <div>
                <SiHtml5 />
                <SiBootstrap />
                <SiJavascript />
                <SiMysql />
                <SiMongodb />
                <SiGraphql />
                <SiHandlebarsdotjs />
                <SiGithub />
              </div>
            </Item>
            <Item>Project 1</Item>
            <Item>Project 2</Item>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
