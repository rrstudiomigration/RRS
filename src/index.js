import React, { StrictMode } from "react";
import ReactDOM from 'react-dom';
import { DarkModeContextProvider } from "./context/darkModeContext";
import Root from "./Root";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <DarkModeContextProvider>
      <Root />
    </DarkModeContextProvider>
  </StrictMode>,
  rootElement
);
