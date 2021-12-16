import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Box } from "@material-ui/core";
const NavBar = () => {
  return (
    <AppBar position="static">
      <Typography variant="h6">Pixabay App</Typography>
    </AppBar>
  );
};

export default NavBar;
