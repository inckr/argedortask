import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import navbarLogo from "../../assets/arbitex-light-logo.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          <img src={navbarLogo} alt="" />
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 2 }}>
        <Typography>
          Arbitex Financial Technologies Inc. Büyükdere Avenue No:237 Noramin
          Business Center Floor:5 Maslak - Sarıyer/Istanbul 0850 346 56 00
        </Typography>
      </Box>
    </Box>
  );
}
