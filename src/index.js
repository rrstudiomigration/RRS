import * as React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";
import "./index.css";

const rootElement = document.getElementById("root");

let theme = createTheme();
theme = responsiveFontSizes(theme);

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
