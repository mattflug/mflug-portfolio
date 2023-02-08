import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import { LinkedIn } from "@mui/icons-material";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <a href="https://github.com/mattflug" target="_blank" rel="noreferrer">
          <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-flug1/"
          target="_blank"
          rel="noreferrer"
        >
          <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
        </a>
        <a
          href="https://twitter.com/matthewflug"
          target="_blank"
          rel="noreferrer"
        >
          <BottomNavigationAction label="Twitter" icon={<Twitter />} />
        </a>
      </BottomNavigation>
    </Box>
  );
}
