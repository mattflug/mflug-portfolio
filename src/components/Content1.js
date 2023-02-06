import * as React from "react";
import Box from "@mui/material/Box";


export default function Content1() {
  return (
    <Box
      margin={1}
      sx={{
        width: { xs: 300, sm: 400, md: 600, lg: 800, xl: 1000 },
        height: { xs: 800, sm: 500, md: 500, lg: 500, xl: 500 },
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <img src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-947663966-e1621956778415.jpg?fit=750%2C380&strip=all" alt=""></img>
    </Box>
  );
}
