import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { darkThemeProperties, lightThemeProperties } from "./Theme";
import { DarkModeContext } from "./context/darkModeContext";

const Root = () => {
  const { darkMode } = useContext(DarkModeContext)
  const selectedTheme = darkMode ? responsiveFontSizes(createTheme(darkThemeProperties))
    : responsiveFontSizes(createTheme(lightThemeProperties));

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </ThemeProvider>
  );

}

export default Root;



