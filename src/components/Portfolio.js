import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./styling.css";
import picjpg from "../assets/picjpg.jpg"
import rtc from "../assets/rtc.jpg";
import robotump from "../assets/robotump.jpg";

// images object for projects
const images = [
  {
    url: robotump,
    title: "Robot Umpire: Current Project",
    width: "32%",
    link: "https://github.com/mattflug/RobotUmpire",
  },
  {
    url: picjpg,
    title: "Matt's React Portfolio",
    width: "32%",
    link: "https://mattflug.github.io/mflug-portfolio",
  },
  {
    url: rtc,
    title: "Real Time Commodities",
    width: "31%",
    link: "https://l1keafox.github.io/RealTimeCommodities/",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Portfolio() {
  return (
    <React.Fragment className="border">
      <CssBaseline />
      <Container maxWidth={false}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: {
              xs: "100vh",
              sm: "130vh",
              md: "140vh",
              lg: "105vh",
              xl: "150vh",
            },
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
          <div className="top-content">
            <img
              className="content1"
              src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-947663966-e1621956778415.jpg?fit=750%2C380&strip=all"
              alt=" Male coding at desk"
            ></img>

            <h1 className="content2">Welcome to Matt's Portfolio!</h1>
          </div>
          <Box
            className="projects"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              minWidth: 300,
              width: "100%",
            }}
          >
            {images.map((image) => (
              <ImageButton
                className="projects2"
                focusRipple
                variant="contained"
                key={image.title}
                style={{
                  width: image.width,
                  margin: "10px",
                }}
              >
                <a href={image.link} target="_blank" rel="noreferrer">
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component=""
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: "relative",
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </a>
              </ImageButton>
            ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
